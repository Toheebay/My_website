const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let visitorCount = 0;

io.on("connection", (socket) => {
    visitorCount++;  // Increase visitor count when a new user connects
    io.emit("updateVisitorCount", visitorCount);  // Send the count to all clients

    socket.on("disconnect", () => {
        visitorCount--;  // Decrease count when user disconnects
        io.emit("updateVisitorCount", visitorCount);
    });
});

// Serve static files (HTML, CSS, JS)
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing effect for header
    const typedText = "Where Creativity Meets Innovation!";
    let index = 0;
    function typeEffect() {
        if (index < typedText.length) {
            document.getElementById("typing-text").textContent += typedText.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // Dark mode toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.classList.add("btn", "btn-secondary", "position-fixed", "top-0", "end-0", "m-3");
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Live Counter
    let count = 0;
    function updateCounter() {
        count++;
        document.getElementById("counter").innerText = count;
    }
    setInterval(updateCounter, 1000);

    // Rotating Date, Time, and Day Display in Header Bar
    const headerBar = document.getElementById("header-bar");
    const dateTimeElement = document.createElement("span");
    dateTimeElement.id = "datetime";
    dateTimeElement.style.marginLeft = "20px";
    headerBar.appendChild(dateTimeElement);

    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        document.getElementById("datetime").innerText = now.toLocaleDateString("en-US", options);
    }
    setInterval(updateDateTime, 1000);

    // Form validation
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert("Please fill in all fields");
            return;
        }
        alert('Thank you for reaching out! I will get back to you soon.');
    });

    // Scroll animations
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Three.js 3D cube animation
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
});

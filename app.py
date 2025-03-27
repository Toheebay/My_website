from flask import Flask, render_template, request, jsonify
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure Flask-Mail (Replace with your own email credentials)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'adebayoajani23@gmail.com'  # Update this
app.config['MAIL_PASSWORD'] = 'password'  # Update this
app.config['MAIL_DEFAULT_SENDER'] = 'adebayoajani23@gmail.com'

mail = Mail(app)

@app.route('/')
def home():
    return render_template('index.html')  # Make sure your HTML file is inside a 'templates' folder

@app.route('/send_message', methods=['POST'])
def send_message():
    data = request.json
    name = data.get('Adebayo Toheeb')
    email = data.get('adebayoajani23@gmail.com')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({'error': 'All fields are required!'}), 400

    try:
        msg = Message(f"New Contact from {name}", recipients=['your_email@gmail.com'])
        msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
        mail.send(msg)
        return jsonify({'success': 'Message sent successfully!'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

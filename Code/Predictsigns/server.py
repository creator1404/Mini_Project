from flask import Flask
import subprocess

app = Flask(__name__)

@app.route('/start-webcam', methods=['GET'])
def start_webcam():
    try:
        subprocess.Popen(["python", "main.py"])  # Adjust path if needed
        return "Webcam started!"
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

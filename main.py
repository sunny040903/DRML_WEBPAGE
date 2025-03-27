import os
import shutil
from flask import Flask, request, render_template

app = Flask(__name__)

# Define folder paths for classification
NODR_FOLDER = r"C:\Users\sunny\OneDrive\Desktop\DR_dataset\No_DR"
MILD_FOLDER = r"C:\Users\sunny\OneDrive\Desktop\DR_dataset\Mild"

# Ensure the static folder exists for storing uploaded images
UPLOAD_FOLDER = "static"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/", methods=["GET", "POST"])
def upload_image():
    if request.method == "POST":
        if "image" not in request.files:
            return "No file uploaded!", 400

        file = request.files["image"]
        if file.filename == "":
            return "No file selected!", 400

        file_path = file.filename  # Just the filename, no full path
        
        # Determine the result based on filename (simulating folder check)
        if file_path in os.listdir(NODR_FOLDER):
            result = "NODR"
        elif file_path in os.listdir(MILD_FOLDER):
            result = "MILD"
        else:
            result = "UNKNOWN"

        # Save the uploaded image to the static folder
        saved_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(saved_path)

        # Redirect to result page with classification result
        return render_template("result.html", result=result, image_path=saved_path)

    return render_template("detect.html")

if __name__ == "__main__":
    app.run(debug=True)

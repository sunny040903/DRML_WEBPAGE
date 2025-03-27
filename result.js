function uploadImage() {
    let input = document.getElementById("imageInput");

    if (input.files.length > 0) {
        let filePath = input.files[0].webkitRelativePath || input.files[0].name;
        let folderName = filePath.split("/")[0]; // Extract folder name

        // Store folder name in sessionStorage
        sessionStorage.setItem("folderName", folderName);

        // Redirect to result page
        window.location.href = "result.html";
    } else {
        alert("Please select an image.");
    }
}
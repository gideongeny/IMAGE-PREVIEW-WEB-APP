document.getElementById('imageInput').addEventListener('change', function(event) {
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');
    imagePreviewContainer.innerHTML = ''; 

    const files = event.target.files;

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreviewContainer.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});

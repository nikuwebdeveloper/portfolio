document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById('lightbox');
    let lightboxImage = document.getElementById('lightbox-img');
    let lightboxText = document.getElementById('lightbox-text');

    lightbox.addEventListener('click', function () {
        lightbox.style.display = 'none';
    })

    let imagePath = "image/art/";

    const images = document.querySelectorAll('.tile-group img');
    let fileName = "";
    // Loop through all images and add a click event listener
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () {
            // display lightbox
            lightbox.style.display = 'flex';

            // get name of shared image and id
            let imageName = images[i].getAttribute('id');

            // hack to deal with the one gif image
            if (imageName === "receptor") {
                fileName = imagePath + imageName + ".gif";
            }
            else {
                // for regular images
                fileName = imagePath + imageName + ".png";
            }

            let dataText = images[i].getAttribute('data-text');
            lightboxImage.setAttribute("src", fileName);
            lightboxText.innerHTML = dataText;
        });
    }

});

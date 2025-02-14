const toggleModeBtn = document.getElementById("toggle-mode");
const startSlideshowBtn = document.getElementById("start-slideshow");
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");
let currentIndex = 0;
let slideshowInterval;
let isSlideshowRunning = false;

// Toggle Dark Mode
toggleModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Start or stop slideshow
startSlideshowBtn.addEventListener("click", () => {
    if (isSlideshowRunning) {
        clearInterval(slideshowInterval);
        images.forEach(img => img.style.display = "block"); // Show all images again
        isSlideshowRunning = false;
        startSlideshowBtn.textContent = "Start Slideshow";
    } else {
        images.forEach(img => img.style.display = "none"); // Hide all initially

        function showNextImage() {
            images.forEach(img => img.style.display = "none"); // Hide all images
            images[currentIndex].style.display = "block"; // Show only one image
            currentIndex = (currentIndex + 1) % images.length;
        }

        showNextImage();
        slideshowInterval = setInterval(showNextImage, 2000);
        isSlideshowRunning = true;
        startSlideshowBtn.textContent = "Stop Slideshow";
    }
});

// Open image in modal on click
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

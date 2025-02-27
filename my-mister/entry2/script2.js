let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

// Start the slideshow immediately on load
showSlides();
setInterval(showSlides, 3000);

let mouseX = 0;
let mouseY = 0;
let flashlight = document.getElementById("flashlight");

// Function to check if the device is touch-enabled
const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

// Function to update mouse position
function getMousePosition(e) {
    let mouseX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let mouseY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    flashlight.style.setProperty("--Xpos", mouseX + "px");
    flashlight.style.setProperty("--Ypos", mouseY + "px");
    document.documentElement.style.setProperty("--Xpos", mouseX + "px");
    document.documentElement.style.setProperty("--Ypos", mouseY + "px");
}

// Attach event listeners
document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);

document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".text-original");

    textElements.forEach(textElement => {
        textElement.addEventListener("mouseenter", () => {
            textElement.classList.add("active"); // Show translation
        });

        textElement.addEventListener("mouseleave", () => {
            textElement.classList.remove("active"); // Hide translation when not hovering
        });
    });
});


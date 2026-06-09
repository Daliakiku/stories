document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");

    if (!popup || !closePopup) {
        console.error("Popup or Close button not found in the DOM.");
        return;
    }

    // Close the popup when the "Close" button is clicked
    closePopup.addEventListener("click", () => {
        popup.classList.add("hidden");
        console.log("Popup closed.");
    });

    // Ensure the popup is visible on page load
    popup.classList.remove("hidden");


    const images = document.querySelectorAll(".circle-image");
    const popups = document.querySelectorAll(".popup");
    const closeButtons = document.querySelectorAll(".close-popup");

    // Show the corresponding popup when an image is clicked
    images.forEach((image) => {
        image.addEventListener("click", () => {
            const popupId = image.getAttribute("data-popup");
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.classList.remove("hidden");
            }
        });
    });

    // Close the popup when the close button is clicked
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const popup = button.closest(".popup");
            if (popup) {
                popup.classList.add("hidden");
            }
        });
    });
});
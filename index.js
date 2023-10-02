// Add this code to your existing index.js

const contentSections = document.querySelectorAll(".content-section");
const background = document.querySelector(".background img");

// Add a click event listener to each content section
contentSections.forEach((section) => {
    const peerThruLink = section.querySelector(".peer-thru-link");
    const imageSource = peerThruLink.getAttribute("data-image");

    peerThruLink.addEventListener("click", () => {
        // Set the background image opacity to 0 to create the "peer through" effect
        background.style.opacity = 0;

        // After a short delay, change the background image source and restore opacity
        setTimeout(() => {
            background.src = imageSource;
            background.style.opacity = 1;
        }, 500); // Adjust the duration of the transition as needed
    });
});

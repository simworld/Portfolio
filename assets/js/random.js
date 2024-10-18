"use strict";
// Function to set a random background image for an element with the ID "home"
function randomBackground() {
  // Array of background image URLs
  const backgroundImages = [
    "../portfolio/assets/images/background.webp",
    "../images/background2.webp",
  ];

  // Generate a random number to select a random background image from the array
  const randomNumber = Math.floor(Math.random() * backgroundImages.length);

  // Get the selected random background image
  const image = backgroundImages[randomNumber];

  // Select the element with the ID "home"
  const element = document.querySelector("#home");

  // Set the background image of the selected element
  element.style.backgroundImage = `url('${image}')`;
}

// Call the randomBackground function to set a random background image initially
randomBackground();

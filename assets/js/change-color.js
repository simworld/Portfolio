"use strict";

// Function to change the color of the element and other related elements
function changeColor(element) {
  // Check if the device is a mobile device
  const isMobile = "ontouchstart" in window;

  // Proceed only if not a mobile device
  if (!isMobile) {
    // Get the fourth class from the element's classList
    const className = element.classList[3];

    // Select elements with specific classes for color change
    const secondClass = document.querySelector(
      ".nav-item.two.home.animation-initial"
    );
    const thirdClass = document.querySelector(
      ".nav-item.three.home.animation-initial"
    );

    // Check if the class is "animation-initial"
    if (className == "animation-initial") {
      // Change colors of the elements
      element.style.color = "var(--snow)";
      secondClass.style.color = "var(--orange)";
      thirdClass.style.color = "var(--orange)";
    }
  }
}

// Function to restore the color of the element and other related elements
function restoreColor(element) {
  // Select elements with specific classes for color restoration
  const secondClass = document.querySelector(".nav-item.two");
  const thirdClass = document.querySelector(".nav-item.three");

  // Reset the color of the elements
  element.style.color = "";
  secondClass.style.color = "";
  thirdClass.style.color = "";
}

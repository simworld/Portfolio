"use strict";
// Event listener for scrolling
window.addEventListener("scroll", function () {
  // Select the header and the element with the class "bouncing"
  const header = document.querySelector("header");
  const scrollDown = document.querySelector(".bouncing");

  // Add or remove the "sticky" class based on the scroll position
  header.classList.toggle("sticky", window.scrollY > 0);
  scrollDown.style.display = "none";

  // Check if the element with the class "bouncing" exists
  if (scrollDown) {
    // Hide the scrollDown button when scrolling down
    if (window.scrollY > 0) {
      scrollDown.style.display = "none";
    } else {
      scrollDown.style.display = ""; // Show the button when at the top
    }
  }
});

// Select all elements with the class "hamburger-navigation"
const menuItems = document.querySelectorAll(".hamburger-navigation");

// Add click event listeners to each menu item
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    // Close the menu by calling the toggleMenu function
    toggleMenu();
    // Uncomment the following line if you want to log a message to the console
    // console.log("ppp");
  });
});

// Function to toggle the menu
function toggleMenu() {
  // Select the menu and the element with the class "menutoggle"
  const menu = document.querySelector(".hamburger-navigation");
  const menutoggle = document.querySelector(".menutoggle");

  // Toggle the "open" class on the menutoggle and menu
  menutoggle.classList.toggle("open");
  menu.classList.toggle("open");

  // Select the body, progress bar, and bar
  const stopScroll = document.querySelector("body");
  const bar = document.querySelector(".progress-bar");

  // Check if the menutoggle has the "open" class
  if (menutoggle.classList.contains("open")) {
    // Disable scrolling on the body and hide the progress bar
    stopScroll.style.overflow = "hidden";
    bar.style.display = "none";
  } else {
    // Enable scrolling on the body and show the progress bar
    stopScroll.style.overflow = "";
    bar.style.display = "";
  }
}

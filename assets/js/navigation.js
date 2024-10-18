"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const tapHereButton = document.querySelector("body");
  const mainContent = document.querySelector(".main-content");
  const navItems = document.querySelectorAll(".nav-item");
  const showMenu = document.querySelector(".bouncing");

  let isToggled = false; // A flag to keep track of the toggle state

  // Initially add the "animation-initial" class to show the text with animation
  navItems.forEach((item) => {
    item.classList.add("animation-initial");
  });

  function toggleContent() {
    mainContent.classList.toggle("hidden"); // Toggle the "hidden" class to hide/show the text

    // Toggle the animation class based on the toggle state
    if (!isToggled) {
      navItems.forEach((item, index) => {
        // If not toggled, add an anchor link and update the text content based on the index
        const newLink = document.createElement("a");
        newLink.href = "#";
        newLink.textContent = "";

        switch (index) {
          case 0:
            newLink.textContent = "About";
            newLink.href = "/portfolio/html/about.html";
            break;
          case 1:
            newLink.textContent = "Projects";
            newLink.href = "/portfolio/html/projects.html";
            break;
          case 2:
            newLink.textContent = "Contact";
            newLink.href = "/portfolio/html/contact.html";
            break;
          case 3:
            newLink.textContent = "Blog";
            newLink.href = "/portfolio/html/blog.html";
            break;
          default:
            break;
        }

        item.innerHTML = ""; // Clear the <li> content
        item.appendChild(newLink); // Add the new anchor link to the <li>
        item.classList.remove("animation-initial");
        item.classList.add("animation");
      });
    }

    // Toggle the isToggled flag
    isToggled = !isToggled;
    tapHereButton.removeEventListener("click", toggleContent);
    showMenu.style.display = "none";
  }

  tapHereButton.addEventListener("click", toggleContent);
});

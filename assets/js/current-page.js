"use strict";

// Get the current URL and pathname of the page
const currentPageURL = window.location.href;
const pathname = window.location.pathname;

// Select all navigation links with the class "hamburger-navigation"
const navigationLinks = document.querySelectorAll(".hamburger-navigation a");

// Loop through each navigation link
navigationLinks.forEach((link) => {
  // Check if the link's href attribute matches the current page URL
  if (link.href === currentPageURL) {
    // Add the "current" class to the link to highlight it
    link.classList.add("current");
    console.log(link);
  }

  // Check if the current pathname is "/html/projects/dimos.html"
  if (pathname === "/html/projects/dimos.html") {
    // Select the 'Projects' link and add the "current" class to highlight it
    const workLink = document.querySelector("a[href='/html/projects.html']");
    if (workLink) {
      workLink.classList.add("current");
    }
  }

  // Check if the current pathname is "/html/projects/butterfly.html"
  if (pathname === "/html/projects/butterfly.html") {
    // Select the 'Projects' link and add the "current" class to highlight it
    const workLink = document.querySelector("a[href='/html/projects.html']");
    if (workLink) {
      workLink.classList.add("current");
    }
  }
});

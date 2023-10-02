"use strict";

const currentPageURL = window.location.href;
const pathname = window.location.pathname;

const navigationLinks = document.querySelectorAll(".hamburger-navigation a");

navigationLinks.forEach((link) => {
  if (link.href === currentPageURL) {
    link.classList.add("current");
    console.log(link);
  }

  if (pathname === "/html/projects/dimos.html") {
    const workLink = document.querySelector("a[href='/html/projects.html']");
    if (workLink) {
      workLink.classList.add("current");
    }
  }
  if (pathname === "/html/projects/butterfly.html") {
    const workLink = document.querySelector("a[href='/html/projects.html']");
    if (workLink) {
      workLink.classList.add("current");
    }
  }
});

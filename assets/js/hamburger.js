window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollDown = document.querySelector(".bouncing");

  header.classList.toggle("sticky", window.scrollY > 0);
  scrollDown.style.display = "none";

  if (scrollDown) {
    // Hide the scrollDown when scrolling down
    if (window.scrollY > 0) {
      scrollDown.style.display = "none";
    } else {
      scrollDown.style.display = ""; // Show the button when at the top
    }
  }
});

const menuItems = document.querySelectorAll(".hamburger-navigation");

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    // Close the menu by calling toggleMenu
    toggleMenu();
    // console.log("ppp");
  });
});

function toggleMenu() {
  const menu = document.querySelector(".hamburger-navigation");
  const menutoggle = document.querySelector(".menutoggle");
  menutoggle.classList.toggle("open");
  menu.classList.toggle("open");

  const stopScroll = document.querySelector("body");
  const bar = document.querySelector(".progress-bar");

  if (menutoggle.classList.contains("open")) {
    stopScroll.style.overflow = "hidden";
    bar.style.display = "none";
  } else {
    stopScroll.style.overflow = "";
    bar.style.display = "";
  }
}

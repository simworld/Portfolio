// window.addEventListener("scroll", function () {
//   const header = document.querySelector("header");
//   const scrollDownButton = document.querySelector(".bouncing"); // Select your scroll-down button here

//   header.classList.toggle("sticky", window.scrollY > 0);

//   // Check if the scrollDownButton exists
//   if (scrollDownButton) {
//     // Hide the scrollDownButton when scrolling down
//     if (window.scrollY > 0) {
//       scrollDownButton.style.display = "none";
//     } else {
//       scrollDownButton.style.display = ""; // Show the button when at the top
//     }
//   }
// });
// function toggleMenu() {
//   const menu = document.querySelector(".hamburger-navigation");
//   const menutoggle = document.querySelector(".menutoggle");
//   menutoggle.classList.toggle("open");
//   menu.classList.toggle("open");

//   //   const hamburger = document.querySelector("#hamburger");

//   //   hamburger.innerHTML = `          <button
//   //   class="menutoggle"
//   //   onclick="toggleMenu();"
//   //   tabindex="0"
//   //   aria-label="Toggle Menu"
//   // >
//   //   <i class="fa-solid fa-bars"></i>
//   //   <i class="fa-solid fa-x"></i>
//   // </button>`;

//   // const header = document.querySelector("header");
//   const stopScroll = document.querySelector("body");
//   const bar = document.querySelector(".progress-bar");

//   // const icon = menutoggle.querySelector("i");
//   // console.log(icon);
//   if (menutoggle.classList.contains("open")) {
//     stopScroll.style.overflow = "hidden";
//     bar.style.display = "none";
//     // header.style.backgroundColor = "var(--snow)";
//   } else {
//     stopScroll.style.overflow = "";
//     bar.style.display = "";

//     // header.style.backgroundColor = "";
//   }

//   // menu.addEventListener("click", () => {
//   //   menu.classList.remove("open");
//   // });
// }

// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty("--vh", `${vh}px`);

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

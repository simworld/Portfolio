window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollDown = document.querySelector(".bouncing");

  header.classList.toggle("sticky", window.scrollY > 0);
  scrollDown.style.display = "none";
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

  //   const hamburger = document.querySelector("#hamburger");

  //   hamburger.innerHTML = `          <button
  //   class="menutoggle"
  //   onclick="toggleMenu();"
  //   tabindex="0"
  //   aria-label="Toggle Menu"
  // >
  //   <i class="fa-solid fa-bars"></i>
  //   <i class="fa-solid fa-x"></i>
  // </button>`;

  const header = document.querySelector("header");
  const stopScroll = document.querySelector("body");
  const icon = menutoggle.querySelector("i");
  console.log(icon);
  if (menutoggle.classList.contains("open")) {
    stopScroll.style.overflow = "hidden";
    // header.style.backgroundColor = "var(--snow)";
  } else {
    stopScroll.style.overflow = "";
    // header.style.backgroundColor = "";
  }
}

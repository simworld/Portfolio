"use strict";
function changeColor(element) {
  const isMobile = "ontouchstart" in window;
  if (!isMobile) {
    const className = element.classList[3];

    const secondClass = document.querySelector(
      ".nav-item.two.home.animation-initial"
    );
    const thirdClass = document.querySelector(
      ".nav-item.three.home.animation-initial"
    );

    // console.log(className);
    if (className == "animation-initial") {
      element.style.color = "var(--snow)";
      secondClass.style.color = "var(--orange)";
      thirdClass.style.color = "var(--orange)";
    }
  }
}

function restoreColor(element) {
  const secondClass = document.querySelector(".nav-item.two");
  const thridClass = document.querySelector(".nav-item.three");
  // const className = element.classList[3];
  element.style.color = "";
  secondClass.style.color = "";
  thridClass.style.color = "";
}

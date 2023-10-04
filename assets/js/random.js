function randomBackground() {
  const backgroundImages = [
    "/assets/images/background.webp",
    "/assets/images/background2.webp",
  ];

  const randomNumber = Math.floor(Math.random() * 2);

  const image = backgroundImages[randomNumber];

  const element = document.querySelector("#home");

  element.style.backgroundImage = `url('${image}')`;
}

randomBackground();

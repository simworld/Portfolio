window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollProgress = (scrollTop / scrollHeight) * 100;

  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = `${scrollProgress}%`;
});

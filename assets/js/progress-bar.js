// Event listener for scrolling
window.addEventListener("scroll", () => {
  // Get the current scroll position (cross-browser support)
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  // Calculate the total scrollable height of the document
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // Calculate the scroll progress as a percentage
  const scrollProgress = (scrollTop / scrollHeight) * 100;

  // Select the progress bar element
  const progressBar = document.querySelector(".progress-bar");

  // Set the width of the progress bar based on the scroll progress
  progressBar.style.width = `${scrollProgress}%`;
});

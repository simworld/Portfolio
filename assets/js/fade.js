;(function(){


  const one = document.querySelector(".one")
  const fadeIns = document.querySelectorAll('.image');

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  function animationOnLoad(){
    one.classList.add("animation");
  }

  
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }

  // Function to initialize the Intersection Observer
  function observeFadeIns() {
    const observer = new IntersectionObserver(handleIntersection, options);
    fadeIns.forEach((fadeIn) => {
      observer.observe(fadeIn);
    });
  }

  // Wait for the page to fully load before adding initial animations
  window.onload = animationOnLoad();

  // Observe elements with the class "fade-in" for the scrolling animation
  observeFadeIns();

})();
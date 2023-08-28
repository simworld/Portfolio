;(function(){


  // const one = document.querySelector(".one")

  const imageFadeIn = document.querySelectorAll('.image');
  const sectionFadeIn = document.querySelectorAll('.three')
  const sectionTwoFadeIn = document.querySelectorAll('.two')


  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  // function animationOnLoad(){
  //   one.classList.add("animation");
  // }

  
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }

  // Function to initialize the Intersection Observer
  function observeFadeIns(item) {
    const observer = new IntersectionObserver(handleIntersection, options);
    item.forEach((fadeIn) => {
      observer.observe(fadeIn);
    });
  }

  // Wait for the page to fully load before adding initial animations
  // window.onload = animationOnLoad();

  // Observe elements with the class "fade-in" for the scrolling animation
  observeFadeIns(imageFadeIn);
  observeFadeIns(sectionFadeIn);
  observeFadeIns(sectionTwoFadeIn);


})();
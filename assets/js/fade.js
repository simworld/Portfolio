// Wrap the code in an immediately-invoked function expression (IIFE) for encapsulation
(function () {
  // Select all elements with the class "image" for image fade-ins
  const imageFadeIn = document.querySelectorAll(".image");
  // Select all elements with the class "three" for section fade-ins
  const sectionFadeIn = document.querySelectorAll(".three");
  // Select all elements with the class "two" for another section fade-ins
  const sectionTwoFadeIn = document.querySelectorAll(".two");

  // Options for the Intersection Observer
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin around the root
    threshold: 0.05, // Trigger when 5% of the target is visible
  };

  // Callback function for handling intersections
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      // Check if the element is currently intersecting the viewport
      if (entry.isIntersecting) {
        // Add the "visible" class to the target element
        entry.target.classList.add("visible");
        // Stop observing the element to avoid repeated animations
        observer.unobserve(entry.target);
      }
    });
  }

  // Function to initialize the Intersection Observer for a set of elements
  function observeFadeIns(item) {
    // Create a new Intersection Observer with the defined callback function and options
    const observer = new IntersectionObserver(handleIntersection, options);
    // Observe each element in the provided set
    item.forEach((fadeIn) => {
      observer.observe(fadeIn);
    });
  }

  // Observe elements with the class "image" for the scrolling animation
  observeFadeIns(imageFadeIn);
  // Observe elements with the class "three" for the scrolling animation
  observeFadeIns(sectionFadeIn);
  // Observe elements with the class "two" for the scrolling animation
  observeFadeIns(sectionTwoFadeIn);
})();

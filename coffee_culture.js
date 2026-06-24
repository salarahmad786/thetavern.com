document.addEventListener("DOMContentLoaded", function () {
    
    // Select both structural header nodes and card component nodes
    const cultureHeaders = document.querySelectorAll(".culture-animate-header");
    const cultureCards = document.querySelectorAll(".culture-animate-card");

    // Setting configuration parameters optimized for progressive slow-motion visibility
    const cultureFadeOptions = {
        root: null,          // Binds monitor over parent browser viewport frame directly
        rootMargin: "0px",
        threshold: 0.08      // Triggers animations immediately once 8% elements step onto interface
    };

    const cultureIntersectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            // Validate if node has penetrated frame window parameters
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-active");
                // Terminate channel tracker to conserve system processing memory allocation
                observer.unobserve(entry.target);
            }
        });
    }, cultureFadeOptions);

    // Track state channels over archive title header elements
    cultureHeaders.forEach(header => {
        cultureIntersectionObserver.observe(header);
    });

    // Track state channels over editorial card structures
    cultureCards.forEach(card => {
        cultureIntersectionObserver.observe(card);
    });
});
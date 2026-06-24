document.addEventListener("DOMContentLoaded", function () {
    
    // Select custom operational text layout arrays
    const shoplifeHeaders = document.querySelectorAll(".shoplife-animate-header");
    const shoplifeCards = document.querySelectorAll(".shoplife-animate-card");

    // Optimized configuration settings for progressive cinematic exposure
    const shoplifeFadeOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.08      // Fires smoothly when 8% is visible on viewport window
    };

    const shoplifeIntersectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-active");
                observer.unobserve(entry.target);
            }
        });
    }, shoplifeFadeOptions);

    // Track intersection hooks for header content arrays
    shoplifeHeaders.forEach(header => {
        shoplifeIntersectionObserver.observe(header);
    });

    // Track intersection hooks for post entry cards
    shoplifeCards.forEach(card => {
        shoplifeIntersectionObserver.observe(card);
    });
});
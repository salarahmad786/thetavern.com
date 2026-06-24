/**
 * ============================================================================
 * INTERSECTION OBSERVER FOR FADE-IN LEFT VIEWPORT ANIMATION
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", function () {
    const fadeLeftElement = document.querySelector(".js-fade-left-trigger");

    if (fadeLeftElement) {
        const observerOptions = {
            root: null, // Track viewport boundary layout metrics
            rootMargin: "0px",
            threshold: 0.08 // Fires immediately when 8% element perimeter enters screen
        };

        const animationObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Inject operational active class to start CSS transition framework
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target); // Kill layout polling after execution
                }
            });
        }, observerOptions);

        // Turn on monitor sequence tracking
        animationObserver.observe(fadeLeftElement);
    }
});
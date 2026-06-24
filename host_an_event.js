document.addEventListener("DOMContentLoaded", function () {
    
    // Aggregate targeting vector arrays over both column block wrappers
    const eventVisualBlocks = document.querySelectorAll(".event-slow-animate");

    // Setting configuration parameters optimized for premium slow-motion visual track exposure
    const eventObserverThresholds = {
        root: null,          // Binds intersection limits over global device viewport window
        rootMargin: "0px",
        threshold: 0.08      // Triggers fade calculations smoothly when 8% element block meets layout view
    };

    const hostEventScrollEngine = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            // Confirm if element intersection bounds are actively met
            if (entry.isIntersecting) {
                // Apply the layout deployment token to invoke global CSS transforms
                entry.target.classList.add("fade-in-active");
                // Unobserve node block to preserve host device processing power
                observer.unobserve(entry.target);
            }
        });
    }, eventObserverThresholds);

    // Register active observation streams over content sections
    eventVisualBlocks.forEach(block => {
        hostEventScrollEngine.observe(block);
    });
});
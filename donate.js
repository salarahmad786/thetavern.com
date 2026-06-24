document.addEventListener("DOMContentLoaded", function () {
    
    // Select both structural text header nodes and card component nodes
    const donationHeaders = document.querySelectorAll(".donate-animate-header");
    const donationCards = document.querySelectorAll(".donate-animate-card");

    // Setting configuration parameters optimized for progressive smooth visibility
    const donationFadeOptions = {
        root: null,          // Tracks parameters over global parent boundary device window
        rootMargin: "0px",
        threshold: 0.08      // Fires smoothly when 8% elements step onto screen
    };

    const donationIntersectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            // Confirm if design element intersects window framework coordinates
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-active");
                // Cease processing active loop metrics over finalized components
                observer.unobserve(entry.target);
            }
        });
    }, donationFadeOptions);

    // Mount operational observers over header titles
    donationHeaders.forEach(header => {
        donationIntersectionObserver.observe(header);
    });

    // Mount operational observers over text & givebutter layouts
    donationCards.forEach(card => {
        donationIntersectionObserver.observe(card);
    });
});
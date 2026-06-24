document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================================================
    // MODULE 1: PREMIUM SLOW-MOTION INTERSECTION ANIMATION LOGIC
    // ==========================================================================
    const orderVisualElements = document.querySelectorAll(".order-scroll-animate");

    const orderFadeConfig = {
        root: null,
        rootMargin: "0px",
        threshold: 0.05 // Triggers smoothly when 5% of element track cuts into layout view bounds
    };

    const orderScrollEngine = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Apply inline continuous mathematical stagger delay metrics
                setTimeout(() => {
                    entry.target.classList.add("fade-in-active");
                }, index % 4 * 120); // Delays consecutive columns clean row sequence animations beautifully
                
                observer.unobserve(entry.target);
            }
        });
    }, orderFadeConfig);

    orderVisualElements.forEach(element => {
        orderScrollEngine.observe(element);
    });

    // ==========================================================================
    // MODULE 2: INTERACTIVE ADD-TO-CART DISPATCH ENGINE
    // ==========================================================================
    const cartActionTriggers = document.querySelectorAll(".product-hover-overlay");

    cartActionTriggers.forEach(trigger => {
        trigger.addEventListener("click", function (event) {
            // Stop bubble flows to prevent structural anchor firing disruptions
            event.stopPropagation();

            // Extract metadata targets direct from node data attributes
            const itemName = this.getAttribute("data-name");
            const itemPrice = this.getAttribute("data-price");

            // Execute dynamic cart deployment logic
            executeAddToCartPipeline(itemName, itemPrice);
        });
    });

    function executeAddToCartPipeline(name, price) {
        // Bhai, yahan aap apna customized cart function hook integrate kar sakte hain.
        // For development clarity trace output pipeline tracker console logs:
        console.log(`%c[CART DISPATCH] Added: ${name} (${price}) to data channel pipelines successfully!`, "color: #256645; font-weight: bold;");
        
        // Premium temporary visual native alert component popup feedback to verify workflow state:
        alert(`${name} has been added to your order cart selection!`);
    }
});
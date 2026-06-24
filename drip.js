document.addEventListener("DOMContentLoaded", function () {
    
    // Select all operational layout node elements
    const dynamicHeaders = document.querySelectorAll(".scroll-animate-header");
    const dynamicAnimCards = document.querySelectorAll(".scroll-animate");

    // Optimized configuration settings for cinematic slow-fade tracking
    const slowFadeObserverOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.10 // Triggers immediately once 10% enters screen
    };

    const slowFadeInEngine = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-active");
                observer.unobserve(entry.target);
            }
        });
    }, slowFadeObserverOptions);

    // Bind monitoring over the main title heading texts
    dynamicHeaders.forEach(header => {
        slowFadeInEngine.observe(header);
    });

    // Bind monitoring over the post layout cards
    dynamicAnimCards.forEach(card => {
        slowFadeInEngine.observe(card);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    
    // Select Givebutter Core Element Nodes
    const frequencyButtons = document.querySelectorAll(".freq-btn");
    const tierCards = document.querySelectorAll(".tier-option-card");
    const customAmountField = document.getElementById("customAmountField");
    const donationFormContainer = document.querySelector(".custom-amount-input-box");

    /**
     * Engine Rule 1: Handles Segmented Switcher for One-time / Monthly toggling
     */
    frequencyButtons.forEach(button => {
        button.addEventListener("click", function () {
            frequencyButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            
            // Optional: Give custom analytics/behavior payload output if tracking subscriptions
            console.log(`Donation frequency track token modified to: ${this.dataset.freq}`);
        });
    });

    /**
     * Engine Rule 2: Interactive Matrix Allocation for Amount Tier Cards Click Events
     */
    tierCards.forEach(card => {
        card.addEventListener("click", function () {
            // Remove active style blueprint overrides from all nodes
            tierCards.forEach(c => c.classList.remove("active"));
            
            // Set focused style framework onto clicked node
            this.classList.add("active");
            
            // Populate value data token directly to input box fields
            const boundAmountValue = this.dataset.value;
            customAmountField.value = boundAmountValue;
        });
    });

    /**
     * Engine Rule 3: Native Input Sync Engine
     * Strips card focused parameters if user inputs custom arbitrary value string
     */
    customAmountField.addEventListener("input", function () {
        const structuralCurrentValue = this.value;
        let perfectMatchFound = false;

        tierCards.forEach(card => {
            if (card.dataset.value === structuralCurrentValue) {
                card.classList.add("active");
                perfectMatchFound = true;
            } else {
                card.classList.remove("active");
            }
        });

        // Optional UI error visual boundary checking
        if (structuralCurrentValue < 0) {
            this.value = "";
        }
    });

    // Native validation helper tracking to provide focus ring assurance safely
    customAmountField.addEventListener("focus", function() {
        donationFormContainer.style.borderColor = "#A38474";
    });
    customAmountField.addEventListener("blur", function() {
        donationFormContainer.style.borderColor = "transparent";
    });
});
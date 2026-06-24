document.addEventListener("DOMContentLoaded", function () {
    
    // ===================================================
    // PART 1: BEFORE / AFTER SLIDER MOUSE DRAG ENGINE
    // ===================================================
    const slider = document.getElementById("beforeAfterSlider");
    const beforeContainer = slider.querySelector(".before-image-container");
    const beforeImage = beforeContainer.querySelector(".slider-image");
    const handle = slider.querySelector(".slider-handle");

    function processSliderMovement(clientX) {
        const boundingBox = slider.getBoundingClientRect();
        const offsetX = clientX - boundingBox.left;
        let percentage = (offsetX / boundingBox.width) * 100;

        // Constraint limits safety protection barriers
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;

        // Manipulate active DOM elements inline layouts instantly
        handle.style.left = `${percentage}%`;
        beforeContainer.style.width = `${percentage}%`;
    }

    // Mouse Tracking Event Listeners
    slider.addEventListener("mousemove", function (e) {
        // Run filter check to trigger only if primary mouse click states occur or hover arrays execute
        if (e.buttons === 1) { 
            processSliderMovement(e.clientX);
        }
    });

    // Smartphone Responsive Touch Engine Integration
    slider.addEventListener("touchmove", function (e) {
        if (e.touches.length > 0) {
            processSliderMovement(e.touches[0].clientX);
        }
    });

    // Window Resize Calibration protection handler
    window.addEventListener("resize", function () {
        const activeSliderWidth = slider.offsetWidth;
        beforeImage.style.width = `${activeSliderWidth}px`;
    });
    // Fire initial resizing run setup instantly
    beforeImage.style.width = `${slider.offsetWidth}px`;


    // ===================================================
    // PART 2: MINI NAVBAR ACTIVE LINK SCROLL MANIPULATOR
    // ===================================================
    const miniNavLinks = document.querySelectorAll(".mini-nav-link");
    const storySections = document.querySelectorAll(".story-content-section");

    // Smooth Scroll triggers on user nav item selections
    miniNavLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.querySelector(".story-mini-navbar").offsetHeight;
                const calculateScrollPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: calculateScrollPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Live Intersection Observer maps link highlighting state while scanning down page manually
    window.addEventListener("scroll", function () {
        let currentActiveSectionId = "";
        const navbarHeight = document.querySelector(".story-mini-navbar").offsetHeight;

        storySections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 20;
            if (window.scrollY >= sectionTop) {
                currentActiveSectionId = `#${section.getAttribute("id")}`;
            }
        });

        miniNavLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === currentActiveSectionId) {
                link.classList.add("active");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    
    // Select all accordion item elements
    const accordionItems = document.querySelectorAll(".accordion-item");

    // Initialize layout setup on DOM load
    accordionItems.forEach((item) => {
        const contentPanel = item.querySelector(".accordion-content-panel");
        const header = item.querySelector(".accordion-header");

        // Initial check: First item open rakhega, baaki close
        if (item.classList.contains("active")) {
            contentPanel.style.maxHeight = contentPanel.scrollHeight + "px";
            header.setAttribute("aria-expanded", "true");
        } else {
            contentPanel.style.maxHeight = "0px";
            header.setAttribute("aria-expanded", "false");
        }

        // Toggle click handler
        header.addEventListener("click", function () {
            const isCurrentlyActive = item.classList.contains("active");

            // Close all items first (Single open logic)
            accordionItems.forEach((innerItem) => {
                innerItem.classList.remove("active");
                innerItem.querySelector(".accordion-content-panel").style.maxHeight = "0px";
                innerItem.querySelector(".accordion-header").setAttribute("aria-expanded", "false");
            });

            // If it wasn't active, open it now
            if (!isCurrentlyActive) {
                item.classList.add("active");
                contentPanel.style.maxHeight = contentPanel.scrollHeight + "px";
                header.setAttribute("aria-expanded", "true");
            }
        });
    });

    // Screen resize hone par heights recalculate karega responsive bug rokne ke liye
    window.addEventListener("resize", function() {
        accordionItems.forEach((item) => {
            if (item.classList.contains("active")) {
                const contentPanel = item.querySelector(".accordion-content-panel");
                contentPanel.style.maxHeight = contentPanel.scrollHeight + "px";
            }
        });
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
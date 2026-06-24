document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("sortDropdown");
    const trigger = dropdown.querySelector(".dropdown-trigger");
    const selectedText = document.getElementById("selected-sort-value");
    const listItems = dropdown.querySelectorAll(".dropdown-menu-list li");

    // Toggle active display state dropdown layout arrays
    trigger.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.toggle("open");
    });

    // Handle interactive state items filter list processing
    listItems.forEach(item => {
        item.addEventListener("click", function () {
            selectedText.innerText = this.innerText; // Switch label state instantly
            dropdown.classList.remove("open");
            
            // Console testing output logs
            console.log("Sort Executed For: " + this.getAttribute("data-value"));
        });
    });

    // Close any active select list panels if outer click triggers occur
    window.addEventListener("click", function () {
        if (dropdown.classList.contains("open")) {
            dropdown.classList.remove("open");
        }
    });
});
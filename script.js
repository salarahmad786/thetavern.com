document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    // Mobile Menu Open/Close Toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Icon change (Bars to X mark)
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Mobile screen par click hone par Dropdown open karne ke liye
    dropdownToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 950) {
            e.preventDefault(); // Default link click behavior rokne ke liye
            dropdown.classList.toggle('active');
        }
    });
});
// --- SCROLL ANIMATION CONTROLLER ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Un sections ko select karna jinko scroll par chalana hai
    const animatedSections = document.querySelectorAll('.scroll-animate');

    // Observer options configure karna
    const observerOptions = {
        root: null, // viewport use hoga
        rootMargin: '0px',
        threshold: 0.2 // Jab section ka 20% hissa screen par dikhega, tabhi chalega
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Agar section screen view ke andar aa gaya hai
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // CSS trigger active karne ke liye class add hogi
                observer.unobserve(entry.target); // Ek baar chalne ke baad baar baar flicker rokega
            }
        });
    }, observerOptions);

    // Sabhi target sections par observer lagana
    animatedSections.forEach(section => {
        sectionObserver.observe(section);
    });
});
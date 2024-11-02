document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Newsletter signup
    const newsletterForm = document.querySelector(".newsletter form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value.trim();
            // Here you would typically send this to your server or a newsletter service
            console.log("Newsletter signup:", email);
            alert("Thank you for subscribing to our newsletter!");
            this.reset(); // Reset the form fields
        });
    }

    // Add sticky navbar functionality
    const navbar = document.querySelector(".navbar");
    const sticky = navbar.offsetTop; // Get the navbar's initial position

    function checkSticky() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky"); // Add sticky class
        } else {
            navbar.classList.remove("sticky"); // Remove sticky class
        }
    }
    window.addEventListener("scroll", checkSticky); // Listen for scroll events

    // Parallax effect for hero section
    const heroSection = document.querySelector(".hero");
    if (heroSection) {
        document.addEventListener("scroll", function () {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Parallax speed
        });
    }
});

// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // FAQ Toggle
    document.querySelectorAll(".faq-question").forEach(item => {
        item.addEventListener("click", function() {
            let answer = this.nextElementSibling;
            answer.classList.toggle("show");
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        // Check if dark mode was previously enabled
        if (localStorage.getItem("dark-mode") === "enabled") {
            document.body.classList.add("dark-mode");
        }

        darkModeToggle.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode");

            // Store user preference
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("dark-mode", "enabled");
            } else {
                localStorage.setItem("dark-mode", "disabled");
            }
        });
    }

    // Resume Score Checker (Simple Word Count)
    const checkScoreBtn = document.getElementById("check-score");
    if (checkScoreBtn) {
        checkScoreBtn.addEventListener("click", function() {
            let text = document.getElementById("resume-text").value.trim();
            
            if (text === "") {
                document.getElementById("resume-score").innerText = "Please paste your resume first!";
                return;
            }

            let wordCount = text.split(/\s+/).length; // Better word count logic
            let score = Math.min(100, wordCount); // Fake scoring logic
            document.getElementById("resume-score").innerText = "Your Resume Score: " + score + "/100";
        });
    }

    // Scroll Fade-In Effect
    function fadeInOnScroll() {
        document.querySelectorAll(".fade-in").forEach(element => {
            let position = element.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                element.classList.add("show");
            }
        });
    }

    // Call fade-in effect on scroll
    document.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on page load in case elements are already in view
});

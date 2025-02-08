<script>
// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", function() {
        this.nextElementSibling.classList.toggle("show");
    });
});

// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Resume Score Checker (Simple Word Count)
document.getElementById("check-score").addEventListener("click", function() {
    let text = document.getElementById("resume-text").value;
    let wordCount = text.split(" ").length;
    let score = Math.min(100, wordCount); // Fake scoring logic
    document.getElementById("resume-score").innerText = "Your Resume Score: " + score + "/100";
});

// Scroll Fade-In Effect
document.addEventListener("scroll", function() {
    document.querySelectorAll(".fade-in").forEach(element => {
        let position = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add("show");
        }
    });
});
</script>

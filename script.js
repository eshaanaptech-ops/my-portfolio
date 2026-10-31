// Mobile Menu
const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Typing Animation
const words = [
    "Web Developer",
    "Frontend Developer",
    "Creative Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typing.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Contact Form Demo
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    this.reset();
});
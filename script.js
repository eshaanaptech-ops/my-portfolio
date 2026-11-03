// Mobile Navigation
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu when a navigation link is clicked
document.querySelectorAll("#nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Automatically update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Typing effect
const typingElement = document.getElementById("typing");
const roles = ["Web Developer", "Frontend Developer", "Creative Coder"];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentRole.substring(0, charIndex);

    let delay = deleting ? 55 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        delay = 1400;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 400;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();
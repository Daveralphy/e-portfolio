const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");
const yearSpan = document.getElementById("year");

yearSpan.textContent = new Date().getFullYear();

function openMenu() {
    mobileMenu.classList.add("open");
    overlay.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = mobileMenu.classList.contains("open");
    isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);

const testimonials = document.querySelector(".testimonials");

if (testimonials && window.innerWidth < 900) {
    setInterval(() => {
        testimonials.scrollBy({ left: 300, behavior: "smooth" });
    }, 4000);
}
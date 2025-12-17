const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");

function toggleMenu() {
    mobileMenu.classList.toggle("open");
    overlay.classList.toggle("open");

    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
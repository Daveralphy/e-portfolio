const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");
const yearSpan = document.getElementById("year");

// Set current year if element exists
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Mobile Menu Logic
function openMenu() {
    if (!mobileMenu || !overlay || !hamburger) return;
    mobileMenu.classList.add("open");
    overlay.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    if (!mobileMenu || !overlay || !hamburger) return;
    mobileMenu.classList.remove("open");
    overlay.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
}

if (hamburger) {
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = mobileMenu.classList.contains("open");
        isOpen ? closeMenu() : openMenu();
    });
}

if (overlay) {
    overlay.addEventListener("click", closeMenu);
}

// Close menu when clicking outside (optional safety)
document.addEventListener('click', (e) => {
    if (mobileMenu && mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && e.target !== hamburger) {
        closeMenu();
    }
});
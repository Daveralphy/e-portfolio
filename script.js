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

function initAutoScroll(selector) {
    const element = document.querySelector(selector);
    if (!element) return;

    let scrollInterval;
    let resumeTimeout;
    let direction = 1;

    const startScrolling = () => {
        clearInterval(scrollInterval);
        scrollInterval = setInterval(() => {
            if (element.scrollWidth <= element.clientWidth) return;

            if (direction === 1) {
                if (element.scrollLeft + element.clientWidth >= element.scrollWidth - 1) {
                    direction = -1;
                } else {
                    element.scrollLeft += 1;
                }
            } else {
                if (element.scrollLeft <= 0) {
                    direction = 1;
                } else {
                    element.scrollLeft -= 1;
                }
            }
        }, 30);
    };

    const stopScrolling = () => {
        clearInterval(scrollInterval);
        clearTimeout(resumeTimeout);
    };

    const resumeScrolling = () => {
        resumeTimeout = setTimeout(startScrolling, 5000);
    };

    element.addEventListener("touchstart", stopScrolling, { passive: true });
    element.addEventListener("touchend", resumeScrolling);
    if (window.matchMedia("(hover: hover)").matches) {
        element.addEventListener("mouseenter", stopScrolling);
        element.addEventListener("mouseleave", resumeScrolling);
    }
    
    startScrolling();
}

initAutoScroll(".testimonial-grid");
initAutoScroll(".tools-wrapper");
initAutoScroll(".testimonials");
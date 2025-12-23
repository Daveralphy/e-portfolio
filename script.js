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

const statsSection = document.querySelector(".stats-row");
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll(".stat-number");
                counters.forEach((counter) => {
                    const target = parseFloat(counter.getAttribute("data-target"));
                    const suffix = counter.getAttribute("data-suffix") || "";
                    const duration = 2000; // 2 seconds
                    const start = 0;
                    const startTime = performance.now();

                    function update(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        // Ease out quart
                        const ease = 1 - Math.pow(1 - progress, 4);
                        
                        const current = start + (target - start) * ease;

                        if (Number.isInteger(target)) {
                            counter.textContent = Math.floor(current) + suffix;
                        } else {
                            counter.textContent = current.toFixed(1) + suffix;
                        }

                        if (progress < 1) {
                            requestAnimationFrame(update);
                        } else {
                            counter.textContent = target + suffix; 
                        }
                    }
                    requestAnimationFrame(update);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}
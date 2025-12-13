const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

let menuOpen = false;

hamburger.addEventListener("click", () => {
    if (!menuOpen) {
        mobileMenu.style.transform = "translateX(100%)";
        mobileMenu.style.display = "block";

        requestAnimationFrame(() => {
            mobileMenu.style.transition = "transform 0.35s ease";
            mobileMenu.style.transform = "translateX(0)";
        });

        hamburger.children[0].style.transform = "rotate(45deg) translateY(6px)";
        hamburger.children[1].style.opacity = "0";
        hamburger.children[2].style.transform = "rotate(-45deg) translateY(-6px)";

        menuOpen = true;
    } else {
        mobileMenu.style.transform = "translateX(100%)";

        setTimeout(() => {
            mobileMenu.style.display = "none";
        }, 350);

        hamburger.children[0].style.transform = "none";
        hamburger.children[1].style.opacity = "1";
        hamburger.children[2].style.transform = "none";

        menuOpen = false;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Mobile menu toggle
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Scroll spy navigation
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                const targetLink = document.querySelector('header nav a[href*=' + id + ']');
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            }
        });
    };

    // Theme toggle initial state
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggleBtn.classList.replace("bx-moon", "bxs-sun");
    }

    // Theme toggle click
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        const isLight = body.classList.contains("light-mode");
        localStorage.setItem("theme", isLight ? "light" : "dark");
        toggleBtn.classList.toggle('bx-moon');
        toggleBtn.classList.toggle('bxs-sun');
    });
});

window.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOM fully loaded and parsed');

    const burgerMenu = document.querySelector(".burger");
    const navbarMenu = document.querySelector(".navbar__menu");

    // Responsive Navbar Toggle
    burgerMenu.addEventListener("click", function () {
        burgerMenu.classList.toggle('burger_active');
        navbarMenu.classList.toggle("active");
    });

})
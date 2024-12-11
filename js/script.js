document.addEventListener("DOMContentLoaded", function () {
    const menuToggler = document.querySelector(".menu-toggler");
    const mainNavigation = document.querySelector(".main-navigation");

    menuToggler.addEventListener("click", function () {
        mainNavigation.classList.toggle("open");
    });
});
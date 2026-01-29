function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    const burger = document.getElementById("hamburger");

    nav.classList.toggle("open");
    burger.classList.toggle("open");
    document.body.classList.toggle("menu-open");
}

document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav-menu").classList.remove("open");
        document.getElementById("hamburger").classList.remove("open");
        document.body.classList.remove("menu-open");
    });
});

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nav-menu")?.classList.remove("open");
    document.getElementById("hamburger")?.classList.remove("open");
});
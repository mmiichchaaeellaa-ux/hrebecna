function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    const burger = document.getElementById("hamburger");
    nav.classList.toggle("open");
    burger.classList.toggle("open");
}

document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav-menu").classList.remove("open");
    });
});
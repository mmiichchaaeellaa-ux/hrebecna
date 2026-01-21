function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("open");
}

document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav-menu").classList.remove("open");
    });
});
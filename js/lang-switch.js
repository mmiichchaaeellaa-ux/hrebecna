// Přepínač jazyka mezi češtinou a němčinou
document.addEventListener("DOMContentLoaded", () => {
    const czBtn = document.getElementById("lang-cz");
    const deBtn = document.getElementById("lang-de");

    if (!czBtn || !deBtn) return;

    const currentPath = window.location.pathname;
    const file = currentPath.split("/").pop();

    const isDE = file.includes("_de");

// zvýraznění aktivního jazyka
    if (isDE) {
        deBtn.classList.add("active");
    } else {
        czBtn.classList.add("active");
    }

    function switchLang(targetLang) {
        let newFile;

        if (targetLang === "de") {
            if (isDE) return;
            newFile = file.replace(".html", "_de.html");
        } else {
            if (!isDE) return;
            newFile = file.replace("_de.html", ".html");
        }

        window.location.href = currentPath.replace(file, newFile);
    }

    czBtn.addEventListener("click", (e) => {
        e.preventDefault();
        switchLang("cz");
    });

    deBtn.addEventListener("click", (e) => {
        e.preventDefault();
        switchLang("de");
    });
});

// Přesměrování loga na domovskou stránku v aktuálním jazyce
const logoLink = document.getElementById("logo-link");

if (logoLink) {
    logoLink.addEventListener("click", (e) => {
        e.preventDefault();

        const path = window.location.pathname;
        const file = path.split("/").pop();

        const isDE = file.includes("_de");

        const target = isDE ? "index_de.html" : "index.html";

        window.location.href = path.replace(file, target);
    });
}
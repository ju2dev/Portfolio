document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar a");

    // Gérer le clic sur les liens
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Gérer le scroll
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;

        links.forEach(link => {
            const sectionId = link.getAttribute("href").substring(1);  // Retirer le '#' pour obtenir l'ID
            const section = document.getElementById(sectionId);  // Utiliser getElementById au lieu de querySelector

            if (section) {  // Vérifier que la section existe
                if (
                    section.offsetTop <= fromTop + 50 &&
                    section.offsetTop + section.offsetHeight > fromTop + 50
                ) {
                    links.forEach(l => l.classList.remove("active"));
                    link.classList.add("active");
                }
            }
        });
    });
});
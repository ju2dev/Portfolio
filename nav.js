document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar a");
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    // Gérer le clic sur les liens
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Gérer le scroll
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY + navbarHeight + 50;

        links.forEach(link => {
            const sectionId = link.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                if (
                    section.offsetTop <= fromTop &&
                    section.offsetTop + section.offsetHeight > fromTop
                ) {
                    links.forEach(l => l.classList.remove("active"));
                    link.classList.add("active");
                }
            }
        });
    });
});
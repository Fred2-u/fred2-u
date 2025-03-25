document.addEventListener("DOMContentLoaded", function () {
    // Sélection du bouton "Voir mes projets"
    const voirProjetsBtn = document.querySelector(".hero .btn");
    const projetsSection = document.querySelector("#projets");

    if (voirProjetsBtn && projetsSection) {
        voirProjetsBtn.addEventListener("click", function () {
            projetsSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Ajout d'un événement sur les boutons "Voir" des projets
    const projectButtons = document.querySelectorAll(".project .btn");

    projectButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Plus d'infos sur ce projet bientôt disponibles !");
            // Redirection possible
            // window.location.href = "lien_du_projet.html";
        });
    });

    // Effet de fade-in sur les sections
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

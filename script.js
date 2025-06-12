// Sélectionne toutes les images des deux grilles
const images = document.querySelectorAll('.best-sales__products div img, .upgrades_photos div img');

// Fonction pour vérifier la visibilité des images
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si l'image est visible
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');  // Ajouter la classe 'visible'
        } else {
            entry.target.classList.remove('visible');  // Enlever la classe 'visible' si l'image n'est plus visible
        }
    });
}, {
    threshold: 0.2 // Déclencher lorsque 20% de l'image est visible
});

// Observer chaque image
images.forEach(image => {
    observer.observe(image);
});

// Sélectionnez le bouton et la fenêtre
const ceosButton = document.querySelector('.home__button button:last-child');
const aboutUsWindow = document.querySelector('.home__about-us');

// Ajoutez un événement de clic au bouton
ceosButton.addEventListener('click', () => {
    aboutUsWindow.classList.toggle('visible'); // Ajoute ou enlève la classe 'visible'
});

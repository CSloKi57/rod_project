console.log('anim_tarifs.js charge')

// ANIM TARIFS
let child_tarifs = document.querySelectorAll('.child_tarifs table')
let increment_tarifs = .8

// Ajoute les classes pour les animations
function BarAnimation(tarif) {
    tarif.classList.add('active_tarif');
}

// Check si l'element passé en param est affiché sur l'écran
function checkVisible(tarif) {
    var rect = tarif.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

//Regarde si la div competence est affichée toutes les 250ms puis désactive l'interval
child_tarifs.forEach((tarif) => {
    var interval = setInterval(function() {
        if ( checkVisible(tarif)) 
        {
            BarAnimation(tarif);
            clearInterval(interval); // Désactive le SetInterval
        }
    }, 250);
})
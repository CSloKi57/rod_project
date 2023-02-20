console.log('anim_accueil.js charge')

// ANIM SERVICES

let child_services = document.querySelectorAll('.child_services')
let increment_trans = .8

child_services.forEach((element) => {
    increment_trans += .3
    element.style.transition = 'all ' + increment_trans + 's'
})

// Ajoute les classes pour les animations
function BarAnimation() {
    document.getElementById('container_services').classList.add('active_services');
}
  
  // Check si l'element passé en param est affiché sur l'écran
function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
  
  //Regarde si la div competence est affichée toutes les 250ms puis désactive l'interval
var interval = setInterval(function() {
    if ( checkVisible(document.getElementById('container_services'))) 
    {
        BarAnimation();
        clearInterval(interval); // Désactive le SetInterval
    }
}, 250);
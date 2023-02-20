console.log('slider.js charge')

const nav_before = document.getElementById('nav_before');
const nav_after = document.getElementById('nav_after');

let realisation = document.querySelectorAll('.realisation');
let valeur_depart = 0;
let resp = 2;

if (window.matchMedia("(min-width: 1368px)").matches) {
    resp = 4;
}

nav_before.addEventListener('click', () => {
    nav_after.style.filter = "brightness(1)";
    if (valeur_depart < 0) {
        valeur_depart = 100 + valeur_depart;

        realisation.forEach((element) => {
            
            element.style.translate = valeur_depart + "%";
            let test = element.style.translate;

        });
        return valeur_depart;
    }
    else {
        nav_before.style.filter = "brightness(0.5)";
    }
})

nav_after.addEventListener('click', () => {
    nav_before.style.filter = "brightness(1)";
    if (valeur_depart > ("-" + realisation.length * 100) / 2 - 50) {
        valeur_depart =  valeur_depart - 100;

        realisation.forEach((element) => {
            
            element.style.translate = valeur_depart + "%";
            let test = element.style.translate;

        });
        return valeur_depart;
    }
    else {
        nav_after.style.filter = "brightness(0.5)";
    }
});


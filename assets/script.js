console.log('script.js charge');

let ouvertures = document.querySelectorAll('.child_ouverture');

ouvertures.forEach((ouverture) => {
    ouverture.addEventListener('click', () => {
        console.log(ouverture.classList)
        if (ouverture.classList[1] == 'active'){
            ouverture.classList.remove('active');
        }
        else {
            ouvertures.forEach((ouverture) => {
                ouverture.classList.remove('active');
            })
            ouverture.classList.add("active");
        }                
    })
});

const nav = document.getElementById('nav_principal')

window.addEventListener('load', ()=> {
    nav.classList.add('load_nav')
})

let header = document.getElementById('header');

window.addEventListener('scroll', function(e) {
    if (window.scrollY != 0) {
        header.classList.add('h_active');
    }
    else {
        header.classList.remove('h_active');
    }
    nav.classList.remove('load_nav')
});
const nav_principal = document.getElementById('nav_principal')
const burger = document.getElementById('burger_menu')

burger.addEventListener('click', () => {
    nav_principal.classList.toggle('active_menu')
})
console.log('marteau.js charge')

const body = document.querySelector('body')

body.addEventListener('click', (e)=> {
    body.classList.add('active')
    function remove_active () {
        body.classList.remove('active')
    }
    setTimeout(remove_active, 200)
})
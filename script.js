const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.link');
const sos = document.querySelector('.linking');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})

document.querySelectorAll('.tap').forEach((el) => {
    el.addEventListener('click', () => {
        hamburger.classList.remove('active')
        menu.classList.remove('active')
    })
})
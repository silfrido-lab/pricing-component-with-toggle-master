const check = document.getElementById('check');

const card = document.querySelector('.main-cost');

check.addEventListener('change', e => {

    card.classList.toggle('toggle');


});
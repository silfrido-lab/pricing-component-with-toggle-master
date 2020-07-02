// const btnCheck = document.getElementById('.checkbox');

// const card = document.querySelector('.main-cost');

// check.addEventListener('change', e => {

//     card.classList.toggle('toggle');


// });

const btnChek = document.querySelector('.checkbox');
btnChek.addEventListener('click', function() {
    document.getElementById('bmensual').classList.toggle('active');
    document.getElementById('banual').classList.toggle('active');

    document.getElementById('pmensual').classList.toggle('active');
    document.getElementById('panual').classList.toggle('active');

    document.getElementById('mmensual').classList.toggle('active');
    document.getElementById('manual').classList.toggle('active');


});
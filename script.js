// skapar variablar för JavaScript funktioner
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listcard');
let body = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

// funktionen till att öppna och stänga varukorgen
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
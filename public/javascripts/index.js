/* console.log('FUNCIONAAAA!!!');

let prueba = document.getElementById('prueba');

console.log(prueba); */

//let element = document.getElementById('carousel');
let element = $('#carousel');

let carousel = new Carousel(element, { auto: true });

/* console.log(carousel.speed); */

carousel.init();

/* setTimeout(function() {
    carousel.next();
}, 2000); */

/* let chido = new Carousel();

chido.speed = 5000;

chido.init(); */
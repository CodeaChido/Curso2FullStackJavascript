function prueba(numero) {
    let sum = 0;

    for (let index = 0; index <= 10; index++) {
        const element = index * index;
        
        sum = sum + element;
    }

    if ( [].length == 0 ) {
        console.log('Es un arreglo vacio');
    }

    let count = 0;

    while( count < 100 ) {
        console.log(count);
        count++;
    }

    switch (numero) {
        case 1:
            console.log(' Soy el numero 1 ');
            break;
        case 2:
            console.log(' Soy el numero 2 ');
            break;
        default:
            console.log('Soy otro numero');
            break;
    }

    return sum;
}

prueba(1);


let objeto = {
    nombre: 'objeto 1',
    calzado: 9,
    datos: {
        perro: 'Firulais',
        edad: 8
    },
    metodo: function (params) {
        return params;
    },
    mascotas: [{
        nombre: 'Firulais',
        edad: 8
    }, {
        nombre: 'alejandro',
        edad: 21
    }]
};

console.log(objeto.nombre, objeto['nombre']);

let funcion = function (params) {
    return params * 2;
}

console.log('[Object]: ', objeto.nombre);

console.log(objeto.datos.perro);

console.log(objeto.metodo('Hola desde objeto.metodo'));

console.log(funcion(6));

(function() {
    console.log('Que onda que pex');
})();

console.log(
(function() {
    return 'Que onda que pex';
})()
);

console.log(objeto.mascotas[0].nombre);

(function(obj) {
    for ( let mascota of obj ) {
        console.log(mascota);
    }
})(objeto.mascotas);

for(let key in objeto) {
    console.log(key);
    console.log(objeto[key]);
}

let persona = [{
    nombre: ''
}];


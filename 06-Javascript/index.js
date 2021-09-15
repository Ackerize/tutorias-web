/* Salida de datos */
console.log('Hola');

/* Tipos de variables */
var nombre = 'Hola';
let apellido = 'Mundo';
const pi = 3.1416;

console.log(nombre, apellido, pi);

/* Tipos de datos */
let numero = 0;
console.log(typeof numero);
let letras = true;
console.log(typeof letras);
let big = 1n;
console.log(typeof big);
let arreglo = [1, 2, 3, "Hola", true];
console.log(typeof arreglo);
console.log(arreglo);

/* Obtener fecha actual */
const fecha = new Date();
console.log(fecha);
console.log(`${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`);

/* Obtener hora actual */
console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);

/* Bucles */

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let j = 0;

while (j < 10) {
    console.log(j);
    j++;
}

j = 0;

do{
    console.log(j);
    j++;
}while(j < 10);

/* Invertir cadena de caracteres */
let cadena = 'Hola Mundo';
console.log(cadena)
console.log(cadena.split('').reverse().join(''))
let arreglo2 = [1];
arreglo2.push(2);
arreglo2.unshift(3);
arreglo2.pop();
arreglo2.shift();


/* Funciones */

function sumar(a, b) {
    return a + b;
};

console.log(sumar(1, 2));

const restar = function(a, b) {
    return a - b;
}

console.log(restar(3, 2));

const multiplicar = (a, b) => a * b;

console.log(multiplicar(3, 2));
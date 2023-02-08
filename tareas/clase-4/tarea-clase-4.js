// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
console.log('------- CADA 3er NUMERO --------');
for (let i = 0; i<=22; i+=3) {
    console.log(i);
}


// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

console.log('------- BUCLE WHILE --------');
let num = 10;
let arrayNum = [];

while (num >= 1) {
    arrayNum.push(num);
    console.log('the num is: ' + num);
    console.log('The array is: ' + arrayNum);
    num -= 1;
}


// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

console.log('------- FIZZBUZZ-----');
fizzBuzz();

function fizzBuzz() {
    for (let i = 1; i <=50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else{
            console.log(i);
        }
        
    }
}


// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

console.log('--------PROMEDIO-------')
promedio();

function promedio() {
    let arrayNotas = tomarNotas();
    console.log('El promedio es de: ' + hacerPromedio(arrayNotas));
    //hacerPromedio(arrayNotas);

}

function tomarNotas() {
    let arrayNotas = [];
    let cantidadNotas = Number(prompt("ingrese el numero de notas a promediar"));

    for (let i = 0; i <= cantidadNotas-1; i++) {
        arrayNotas.push(Number(prompt('ingrese un numero')));
        console.log(arrayNotas[i]);
    }
    return arrayNotas;
}

function hacerPromedio(arrayNotas) {
    let total = 0;
    for (let i = 0; i<=arrayNotas.length-1; i++) {
        total += arrayNotas[i]; 
        console.log(total);   
    }
    console.log('total afuera: ' + total); 

    let promedio = Math.round((total/arrayNotas.length)*100)/100;
    //console.log('promedio: ' + promedio);
    return promedio;
}
//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

console.log('----- Desafio 1 -----');
desafioUno();

function desafioUno() {
  for (let i = 1; i<=10; i++) {
    console.log(i);
  }
}
console.log('----- Desafio 2 -----');
desafioDos();

function desafioDos() {
  for (let i = 1; i<=10; i++) {
    if(i % 2 !== 0) {
      console.log(i);
    }
  }
}

console.log('----- Desafio 3 -----');
desafioTres();

function desafioTres() {
  let numero = 7;

  for (let i = 0; i<=10; i++) {
    let multiplicacion = numero * i;
    console.log(numero + 'x' + i + ' = ' + multiplicacion);
  }
}

console.log('----- Desafio 4 -----');
desafioCuatro();

function desafioCuatro() {
  for (let i = 1; i<=9; i++) {
    console.log('tabla del ' + i + ':');
    for(let j = 0; j<=10; j++) {
      let multiplicacion = i*j;
      console.log(i + 'x' + j + ' = ' + multiplicacion);
    }
  }
}

console.log('----- Desafio 5 -----');
desafioCinco();

function desafioCinco() {
  let array = [1,2,3,4,5,6,7,8,9,10];
  let suma = 0;

  for (let i = 0; i<=array.length-1; i++) {
    suma += array[i];
  }
  console.log(suma);
}

console.log('----- Desafio 6 -----');
desafioSeis();

function desafioSeis() {
  let numero = 10;
  for(let i = numero -1; i>=1; i--) {
    numero = numero * i;
  }
  console.log(numero);

}

console.log('----- Desafio 7 -----');
desafioSiete();

function desafioSiete() {
  let suma = 0;
  for (let i = 10; i <= 30; i++) {
    if(i % 2 !== 0) {
      suma += i;
    }
  }
  console.log(suma);
}

console.log('----- Desafio 8 -----');
/* desafioOcho();

function desafioOcho() {
  let c = Number(prompt("indique que temperatura hace en celcius"));

  //let f = (c*1.8) + 32;
  let f = ((9/5)*c) + 32;
  console.log('en Fahrenheit son: ' + f + ' grados.');
} */

console.log('----- Desafio 9 -----');
/* desafioNueve();

function desafioNueve() {
  let f = Number(prompt("indique que temperatura hace en Fahrenheit"));

  let c = 5/9 * (f-32);
  console.log('en Celsius son: ' + c + ' grados.');
} */

console.log('----- Desafio 10 -----');
/* desafioDiez();

function desafioDiez() {
  let array = [];
  let total = 0;

  let tamanioArray = Number(prompt("ingrese cantidad de numeros"));

    for (let i = 0; i <= tamanioArray-1; i++) {
      array.push(Number(prompt('ingrese un numero')));
    }

    for (let i = 0; i<= tamanioArray-1; i++) {
      total += array[i];
    }

    console.log('total: ' + total); 
}
*/

console.log('----- Desafio 11 -----');
/* desafioOnce();

function desafioOnce() {
  let array = [];
  let suma = 0;
  let promedio = 0;

  let tamanioArray = Number(prompt("ingrese cantidad de notas a promediar"));

  for (let i = 0; i <= tamanioArray-1; i++) {
    array.push(Number(prompt('ingrese un numero')));
  }

  for (let i = 0; i<= tamanioArray-1; i++) {
    suma += array[i];
    if(i === tamanioArray-1) {
      promedio = suma/tamanioArray;
    } 
  }

  console.log("El promedio total de las " + tamanioArray + " notas es de: " + promedio);
}
 */
console.log('----- Desafio 12 -----');
/* desafioDoce();

function desafioDoce() {
  let array = [];
  let suma = 0;

  let tamanioArray = Number(prompt("ingrese tamanio del array"));

  for (let i = 0; i <= tamanioArray-1; i++) {
    array.push(Number(prompt('ingrese un numero')));
  }

  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
      suma += array[i];
    }
  }
  console.log("el total de la suma de los numeros positivos dentro del array es de: " + suma);
} */

console.log('----- Desafio 13-----');
/* desafioTrece();

function desafioTrece() {
  let array = [];
  let mayor = 0;

  let tamanioArray = Number(prompt("ingrese tamanio del array"));

  for (let i = 0; i <= tamanioArray-1; i++) {
    array.push(Number(prompt('ingrese un numero')));
  }

  for(let i = 0; i<array.length; i++) {
    if(array[i]> mayor) {
      mayor = array[i];
    }
  }
console.log("el mayor numero es: " + mayor);
} */
console.log('----- Desafio 14-----');
/* desafioCatorce(10);

function desafioCatorce(n) {
  let n1 = 0;
  let n2 = 1;
  let contador;


  for (let i = 0; i<n; i++) {
    console.log(n1);
    contador = n1 + n2;
    n1 = n2;
    n2 = contador
  }

} */

console.log('----- Desafio 16-----');

/* let numero = Number(prompt("indique numero a revisar si es primo"));

if(numero <= 0 || numero === 1) {
  console.log("numero invalido");
} else {
  desafioDieciseis(numero);
}


function desafioDieciseis(numero) {
    for (i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return console.log(false);
      }
    }
    return console.log(true);
} */

console.log('----- Desafio 17-----');

/* let numero = Number(prompt("indique numero a desagregar y sumar"));
desafioDiecisiete(numero);


function desafioDiecisiete(numero) {
  let resto = 0;
  let sumaDigitos = 0;

  while(numero) {
    resto = numero % 10; // aislo digito de atras para adelante
    sumaDigitos = sumaDigitos + resto;
    numero = Math.floor(numero/10) // saco digito
  }

  console.log(sumaDigitos);
} */

console.log('----- Desafio 18-----');
/* desafioDieciocho();

function desafioDieciocho() {


  for (let i = 1; i <= 100; i++) { // tomo numero hasta el 100
    let primo = true;

    for (let j = 2; j < i; j++) { // reviso si el numero tomado es primo

      if(i % j === 0) {
        primo = false; // no es primo
      }
    }

    if(primo === true && i !== 1 ) {
      console.log(i);
    }
  }
} */

console.log('----- Desafio 19-----');
/* 
desafioDiecinueve();

function desafioDiecinueve() {
  let array = [];
  let inicio = 5;
  let cantidad = 4;

  for(let k = 0; array.length<cantidad; k++) {
    if(esPrimo(inicio)) {
      array.push(inicio);
    }
    inicio ++;
  }

  console.log(array);
}

function esPrimo(inicio) {
  for(let j = 2; j < inicio; j++) {
    if(inicio % j === 0) {
      return false;
    }
  }
  return true;
} */

console.log('----- Desafio 20-----');

/* desafioVeinte();

function desafioVeinte() {
  let arrayA = [9,1,2,3,4];
  let elemento = arrayA.shift(); // shift() elimina el ultimo elemento
  arrayA.push(elemento);
  console.log(arrayA);

}
 */
console.log('----- Desafio 21-----');

/* desafioVeintiuno();

function desafioVeintiuno() {
  let arrayA = [2,3,4,1];
  let elemento = arrayA.pop() //The pop() method removes the last element from an array and returns that element.  
  arrayA.unshift(elemento); //The unshift() method adds one or more elements to the beginning of an array
  console.log(arrayA);
  
}
 */

console.log('----- Desafio 22-----');

/* desafioVentidos();

function desafioVentidos() {
  let arrayA = [5,6,3];
  let arrayInvertido = arrayA.reverse(); //reverse invierte
  console.log(arrayInvertido);
}

console.log('----- Desafio 23-----');
let frase = "bienvenido";
desafioVentitres(frase);

function desafioVentitres(frase) {

  // let arrayFrase = frase.split("") // String.prototype.split(). The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern
  // let arrayInvertido = arrayFrase.reverse();
  // let fraseIvertida = arrayInvertido.join(""); //Array.prototype.join(). The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
  // console.log(fraseIvertida); 

  // let arrayInvertido = frase.split(" ").map(palabra => palabra.split("").reverse().join(""));
  // console.log(arrayInvertido.join(" "));

  //con split()  tomo un patron de String y divido en un array de substrings donde [i] es cada palabra separada por " ".
  //con map() creao un array donde cada palabra (indice [i] de la frase.split()) se separa en caracteres, se invierte y se vuelve a unir en el array
  //finalmente junto en un string cada [i] separados por un espacio " ".
}
 */

/* console.log('----- Desafio 24-----');
desafioVeinticuatro();

function desafioVeinticuatro() {
  let array1 = [1,2,3];
  let array2 = ["a","b","c"];

  let array3 = array1.concat(array2);
  console.log(array3);
}
 */

console.log('----- Desafio 25-----');
/* 
let array1 = [1,2,3];
let array2 = [3,7,11];
let array3 = [];

console.log(desafioVeinticinco(array1, array2, array3));


function desafioVeinticinco(array1, array2, array3) {

  array1.forEach(elemento => { // loopeamos por cada valor del array1
    if(!array2.includes(elemento)) { // revisamos si cada valor no existe en array2
      array3.push(elemento); // si no existe lo agregamos al array vacio
    }
  });

  array2.forEach(elemento => {
    if(!array1.includes(elemento)) {
      array3.push(elemento);
    }
  });

  return array3;
} 
 */
/* 
console.log('----- Desafio 26-----');
let array1 = [5,1,2,3,4];
let array2 = [3,4];
let array3 = [];
console.log(desafioVeintiseis(array1, array2, array3));

function desafioVeintiseis(array1, array2, array3) {

  array1.forEach(elemento => { // loopeamos por cada valor del array1
    if(!array2.includes(elemento)) { // revisamos si cada valor no existe en array2
      array3.push(elemento); // si no existe lo agregamos al array vacio
    }
  });

  return array3;
}
 */

console.log('----- Desafio 27-----');
/* 
let array1 = [1,2,3,4,5,4,3,2,1,0];
let array2 = [];
console.log(desafioVeintisiete1(array1, array2));


function desafioVeintisiete1(array1, array2) {
  array1.forEach(elemento => {
    if(!array2.includes(elemento)) {
      array2.push(elemento);
    }
  });

  return array2;
}
 */

/*


==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */

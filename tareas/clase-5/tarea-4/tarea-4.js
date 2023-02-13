
//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

console.log('hi');
let listItems = Array.from(document.querySelectorAll('#myList > li'));
let innerHTMLArray = listItems.map(item => item.textContent);

function promedio(numeros) {
    let suma = 0;
    for(let i = 0; i<=numeros.length-1; i++) {
        
        suma += Number(numeros[i]);
    }
    console.log(suma);

    return suma / numeros.length;
}

console.log(promedio(innerHTMLArray));



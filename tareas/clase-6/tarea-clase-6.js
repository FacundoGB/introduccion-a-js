/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
const FORM = document.querySelector("#form");
const GRUPO_FAMILIAR = document.createElement("div");
const CONTENEDOR = document.querySelector('#contenedor');
const MAYOR = document.querySelector('#mayor span');
const MENOR = document.querySelector('#menor span');
const PROMEDIO = document.querySelector('#promedio span');
const BTN_ENVIAR = document.querySelector('#submit');
const BTN_CANTIDAD = document.querySelector('#btn-cantidad');

GRUPO_FAMILIAR.classList.add("grupo-familiar");
FORM.appendChild(GRUPO_FAMILIAR);

let familia = [];

let cantFamiliares = prompt("Cuanta gente compone su grupo familiar?");
crearForm(cantFamiliares);

function crearForm(n) {
    for (let i = 1; i <= n; i++) {
        let familiarNombre = document.createElement("lable");

        let nombre = prompt(`cual es el nombre del familiar N ${i}?`);
        familiarNombre.textContent = nombre;

        familiarNombre.setAttribute('id', `name${i}`);
        GRUPO_FAMILIAR.appendChild(familiarNombre);

        let familiarEdad = document.createElement('input');
        familiarEdad.setAttribute('id', `age${i}`);
        GRUPO_FAMILIAR.appendChild(familiarEdad);
    }

}

const calcular = document.querySelector('#submit').addEventListener('click', () => {
    let sum = 0;
    for(let i = 0; i<cantFamiliares; i++) {
        let name = document.querySelector('#name'+(i+1)).innerHTML;
        let age = Number(document.querySelector('#age'+(i+1)).value);
        
        familia[i] = {
            name: name,
            age: age
        };

        sum+= familia[i].age;
    }
    console.log(familia);
    const ordenMayor = familia.sort((a,b) => a.age > b.age ? -1 : 1);
 
    console.table(ordenMayor);
    let menor = familia.slice(-1);
     

    MAYOR.textContent = `${ordenMayor[0].name} con ${ordenMayor[0].age} anios`;
    MENOR.textContent = `${menor[0].name} con ${menor[0].age} anios`;
    PROMEDIO.textContent = `${Math.floor(sum/familia.length)}`;

})


/* function iniciar() {

    let cantFamiliares = prompt("Cuanta gente compone su grupo familiar?");

    if (isNaN(cantFamiliares)) {
        alert("input invalido")
    } else {
       parseInt(cantFamiliares);
       crearForm(cantFamiliares);
       calcular;
    }
}
 */



/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

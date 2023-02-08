// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
console.log("hola, mundo");

function calcularEdad(aA, aN) {
    return aA-aN;
}


const anioActual = Number(prompt("indique anio actual"));
const anioNacimiento = Number(prompt("Indique fecha de nacimiento"));


alert("usted tiene " + calcularEdad(anioActual, anioNacimiento) + " anios");





// -------- // 

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.


const decision = prompt("Desea calcular su salario anual o mensual?").toLocaleLowerCase();
console.log(decision);

if (decision === "anual") {
    anual(decision);
} else if (decision === "mensual") {
    mensual(decision);
} else {
    alert("Eleccion invalida. Refresque la ventana e intente nuevamente");
}

function anual(decision) {
    let salarioAnual = Number(prompt("Indique su salario anual sin . ni $"));
    let resultado = salarioAnual/12;

    alert("usted gana " + resultado + " al mes");

}

function mensual (decision) {

    let salarioMensual = Number(prompt("Indique su salario mensual sin . ni $"));
    let anual = Math.round((salarioMensual*12)*100)/100;
    let diario = Math.round((salarioMensual/25)*100)/100;
    let semanal = Math.round((anual/52)*100)/100;
    let hora = Math.round((diario/8)*100)/100;

    const text = "Usted gana " + anual + " al anio. \n" + semanal + " por semana. \n" + diario + " diario. \n" + hora + " por hora.";
    alert(text);
}







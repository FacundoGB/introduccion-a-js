// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


let nombreUsuario = prompt("Cual es tu nombre de pila?").toLowerCase();

coincidenciaNombres(nombreUsuario);

function coincidenciaNombres(nombreUsuario) {
    let nombrePc = "facundo";
    let perro = "morgan";

    if (nombrePc === nombreUsuario) {
        return alert("Hola, Tocayo! Yo también me llamo " + nombreUsuario);
    } else if (nombreUsuario === perro) {
        return alert("Hola " + nombreUsuario + " te llamas igual que mi perro!");
    } else {
        return alert("Hola " + nombreUsuario + ". Mi nombre es " + nombrePc + " y mi perro se llama " + perro);
    }
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

 let edadUsuario = Math.round(Number(prompt("Cual es tu edad?")));

coincidenciaEdad(edadUsuario);

function coincidenciaEdad(edadUsuario) {
    let edadPc = 25;
    if (edadUsuario > edadPc) {
        return alert("Estas viejardo rey");       
    } else if (edadUsuario < edadPc) {
        return alert("Sos un peke");
    } else {
        return alert("Que onda bro estamos en la misma");
    }
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let documento = prompt("tenes document? si/no").toLowerCase();
chequeoDni(documento);

function chequeoDni(documento) {
    if (documento === "si") {
        respuestaSi();
    } else if (documento === "no") {
        respuestaNo();
    } else {
        return alert("Respuesta invalida. Dale al f5");
    }
}

function respuestaSi() {
    let edad = Number(prompt("Decime tu edad q no tengo los lentes pibe"));

    if (edad > 18) {
        return alert("pasa pibe, no hagas quilombo");
    } else {
        return alert("volve a tu casa a topear, aca es +18");
    }
}
function respuestaNo() {
    return alert("Volve con el dni pa");
}
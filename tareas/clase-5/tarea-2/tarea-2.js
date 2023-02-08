//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let nombreContainer = document.querySelector('.nombre-container');

h1.textContent = "Bienvenido!";

const RESULTADO = document.querySelector('#resultado');
const P = document.createElement('p');

function saludar() {

    let nombreUsuario = document.getElementById("nombre-usuario").value;
    let segNombreUsuario = document.getElementById("seg-nombre-usuario").value;
    let apellidoUsuario = document.getElementById("apellido-usuario").value;
    let edadUsuario = document.getElementById("edad-usuario").value;

    h1.textContent = `Bienvenido, ${nombreUsuario}!`;
    P.textContent = `Hola ${nombreUsuario} ${segNombreUsuario} ${apellidoUsuario}, tenes ${edadUsuario} años!`
    
    RESULTADO.appendChild(P);
}

btn.addEventListener('click', saludar);
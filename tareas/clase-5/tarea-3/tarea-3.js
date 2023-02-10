//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const BTN_CANTIDAD = document.querySelector('#btn-cantidad');
const BTN_CALCULAR = document.querySelector('#btn-calcular');
const CONTAINER_VIDEOS = document.querySelector('.container-videos');
const VIDEOS_DIV = document.createElement("div");
const RESULTADO = document.querySelector('strong');
let cantidadVideos = document.querySelector('#cantidad-videos');

document.querySelector('#btn-calcular').style.display = 'none';

VIDEOS_DIV.classList.add('video-divs');
CONTAINER_VIDEOS.appendChild(VIDEOS_DIV);

BTN_CANTIDAD.disabled = false;


BTN_CANTIDAD.addEventListener('click', () => {
    mostrarBoton();
    if(cantidadVideos.value > 0) {
        crearVideos();
    }
    BTN_CANTIDAD.disabled = true;
});

BTN_CALCULAR.addEventListener('click',calcularTiempo);


function mostrarBoton() {
    document.querySelector('#btn-calcular').style.display = 'block';
}

function crearInputs() {
    for(let j = 1; j<=3; j++) {
        let tiempo = document.createElement('input');
        tiempo.setAttribute('id', 'tiempo-input');
        if(j === 1) {
            tiempo.setAttribute('placeholder', 'hh')
            tiempo.setAttribute('class', 'horas')
        } else if(j === 2) {
            tiempo.setAttribute('placeholder', 'mm')
            tiempo.setAttribute('class', 'minutos')
        } else if (j === 3) {
            tiempo.setAttribute('placeholder', 'ss')
            tiempo.setAttribute('class', 'segundos')
        }
        VIDEOS_DIV.appendChild(tiempo);
    }

}

function crearVideos() {
    for (let i = 1; i <= cantidadVideos.value; i++) {
        console.log("hi" + i);
        let videoLable = document.createElement("p");
        videoLable.textContent = "Video " + i;
        VIDEOS_DIV.appendChild(videoLable);
        crearInputs();
    }
}

function totalHMS() {
    let arrayHoras = document.querySelectorAll('.horas');
    let arrayMinutos = document.querySelectorAll('.minutos');
    let arraySegundos = document.querySelectorAll('.segundos');
    
    let horas = 0;
    let minutos = 0;
    let segundos = 0;

    for(let i = 0; i < arrayHoras.length; i++) {
        horas += Number(arrayHoras[i].value);
        console.log("horas " + horas);
    }
    for(let i = 0; i < arrayMinutos.length; i++) {
        minutos += Number(arrayMinutos[i].value);
        console.log("minutos " + minutos);
    }
    for(let i = 0; i < arraySegundos.length; i++) {
        segundos += Number(arraySegundos[i].value);
        console.log("segundos " + segundos);
    }

    let total = (horas*3600) + (minutos*60) + segundos;

    return total;
}

function calcularTiempo() {

    let duracionEnSegundos = totalHMS();

    const horasTotal = Math.floor(duracionEnSegundos/3600);
    const minutosTotal = Math.floor((duracionEnSegundos%3600)/60);
    const segundosTotal = Math.floor(duracionEnSegundos%60);

    RESULTADO.innerHTML = 'La duracion total es de: ' + horasTotal + 'horas, ' +
    minutosTotal + 'minutos, ' + segundosTotal + ' segundos.';
}

const BTN_FAMILYN = document.querySelector('#btn-familyN');
const BTN_CALCULAR = document.querySelector('#calcular');


BTN_FAMILYN.addEventListener('click', (e) => {
    const CANTIDAD_INGRESADA = document.querySelector("#cantidad-familiares");
    const cantidadDeFamiliares = Number(CANTIDAD_INGRESADA.value);

    crearFamilia(cantidadDeFamiliares);

    e.preventDefault();
})


BTN_CALCULAR.addEventListener('click', (e) => {
    const salariosTotal = obtenerSalarios();
    mostrarSalarioMayor([...salarioMayorMenor(salariosTotal)][0]);
    mostrarSalarioMenor([...salarioMayorMenor(salariosTotal)].slice(-1).pop());
    mostrarPromedioAnual(promedioAnual(salariosTotal));
    mostrarPromedioMensual(promedioMensial(salariosTotal));
    
    e.preventDefault();
})

// ---- creacion de form ---- //

function crearFamilia(cantidadFamiliares) {
    for (let i = 1; i <= cantidadFamiliares; i++){
        unFamiliar(i);
    }
}

function unFamiliar(i) {
    const div = document.createElement('div');
    div.className = 'familiar';
    
    let nombre = prompt(`cual es el nombre del familiar trabajador N ${i}`);

    const lableName = document.createElement('lable');
    lableName.textContent = nombre;
    const inputSalary = document.createElement('input');
    inputSalary.setAttribute('placeholder', 'ingrese salario');

    div.appendChild(lableName);
    div.appendChild(inputSalary);

    const familia = document.querySelector('#familia');
    familia.appendChild(div);
    
}
// -------- //

// ---- calculos y display ---- //
function salarioMayorMenor(n) {
    const ordenMayor = n.sort((a,b) => b - a);
    //console.table(ordenMayor);

    return ordenMayor;
}

function mostrarSalarioMayor(valor) {
    document.querySelector('#salario-mayor').textContent = `$${valor}`;
}

function mostrarSalarioMenor(valor) {
    document.querySelector('#salario-menor').textContent = `$${valor}`;
}

function promedioAnual(n) {
    let sum = 0;

    for (let i = 0 ; i <n.length; i++) {
        sum += n[i];
    }
    return (sum/n.length).toFixed(2);
}

function mostrarPromedioAnual(valor) {
    document.querySelector('#salario-anual-promedio').textContent = `$${valor}`;
}

function promedioMensial(n) {
    salariosMensuales = [];
    let sum = 0;

    n.forEach(salario => {
        let unMes = (salario/12).toFixed(2);
        salariosMensuales.push(unMes);
    });

    for (let i = 0 ; i <salariosMensuales.length; i++) {
        sum += Number(salariosMensuales[i]);
    }
    //console.table(salariosMensuales);
    //console.log((sum/salariosMensuales.length).toFixed(2));

    return (sum/salariosMensuales.length).toFixed(2);
}

function mostrarPromedioMensual(valor) {
    document.querySelector('#salario-mensual-promedio').textContent = `$${valor}`;
}

function obtenerSalarios() {
    const arrayFamiliares = document.querySelectorAll('.familiar input');
    const arraySalarios = [];
    for (let i =0; i< arrayFamiliares.length; i++) {
        arraySalarios.push(Number(arrayFamiliares[i].value));
    }

    return arraySalarios;
}
// -------- //
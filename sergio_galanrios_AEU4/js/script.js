// VALIDACIONES INMEDIATAS

function validarNombre() {
    let v = document.getElementById("nombre").value.trim();
    document.getElementById("err-nombre").textContent =
        (v == "" || v.length < 3) ? "Nombre inválido" : "";
}

function validarEmail() {
    let v = document.getElementById("email").value.trim();
    let reg = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    document.getElementById("err-email").textContent =
        (!reg.test(v)) ? "Correo inválido" : "";
}

function validarEdad() {
    let v = document.getElementById("edad").value.trim();
    document.getElementById("err-edad").textContent =
        (v == "" || v < 5 || v > 120 || v.length > 3) ? "Edad inválida" : "";
}

function validarEquipo() {
    let v = document.getElementById("equipo").value;
    document.getElementById("err-equipo").textContent =
        (v == "") ? "Selecciona un equipo" : "";
}

function validarJugador() {
    let v = document.getElementById("jugador").value.trim();
    document.getElementById("err-jugador").textContent =
        (v == "" || v.length < 2) ? "Jugador inválido" : "";
}

function validarNivel() {
    let v = document.querySelector("input[name='nivel']:checked");
    document.getElementById("err-nivel").textContent =
        (!v) ? "Selecciona un nivel" : "";
}

function validarEstadio() {
    let v = document.querySelector("input[name='estadio']:checked");
    document.getElementById("err-estadio").textContent =
        (!v) ? "Selecciona una opción" : "";
}

function validarFecha() {
    let fecha = document.getElementById("fecha").value;
    let edad = document.getElementById("edad").value.trim();
    let err = document.getElementById("err-fecha");

    if (fecha.length != 10 || edad == "") {
        err.textContent = "Fecha inválida";
        return;
    }

    let hoy = new Date();
    let fn = new Date(fecha);

    let edadCalc = hoy.getFullYear() - fn.getFullYear();
    let mes = hoy.getMonth() - fn.getMonth();

    if (mes < 0 || (mes == 0 && hoy.getDate() < fn.getDate())) {
        edadCalc--;
    }

    console.log("Edad escrita:", edad, "Edad calculada:", edadCalc);

    err.textContent = (edadCalc != parseInt(edad)) ?
        "La fecha no coincide con la edad" : "";
}

function validarComp() {
    let v = document.querySelectorAll("input[name='competiciones']:checked");
    document.getElementById("err-comp").textContent =
        (v.length == 0) ? "Selecciona al menos una" : "";
}

function validarOpinion() {
    let v = document.getElementById("opinion").value.trim();
    document.getElementById("err-opinion").textContent =
        (v.length < 10) ? "Mínimo 10 caracteres" : "";
}


// VALIDACIÓN FINAL AL ENVIAR

function validar() {

    validarNombre();
    validarEmail();
    validarEdad();
    validarEquipo();
    validarJugador();
    validarNivel();
    validarEstadio();
    validarFecha();
    validarComp();
    validarOpinion();

    let errores = document.querySelectorAll(".error-msg");
    let numErrores = 0;

    for (let e of errores) {
        if (e.textContent != "") numErrores++;
    }

    console.log("Número de errores:", numErrores);

    if (numErrores > 0) {
        console.log("Formulario NO enviado, hay errores.");
        return false;
    }

    console.log("Formulario correcto, enviado.");
    alert("Formulario enviado correctamente.");
    return true;
}
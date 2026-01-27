/*
*
*Vamos a validar un formulario
*
*/

/*
*
*Declaramos las variables generales y accedemos a los valores de los campos.
*
*/

//Contador indica el número de inputs valoidados correctamente. 
var contador = 0;
var array_validaciones = new Array();

//Campos a validar.

var nombre;
var dni;
var coche;
var enviar;


/*var nombre = document.getElementById("nombre").value;
consol.log(nombre);
var dni = document.getElementById("DNI").value;
console.log(dni);
var coche = document.getElementById("nombre").value;
console.log(coche);

var enviar = document.getElementById("enviar").value;
console.log(enviar);

enviar.removeAttribute("disabled");*/

/*
*
*Definimos funciones de comprobación.
*
*/

function validarnombre(){
    document.getElementById("span_nombre").setAttribute("style","display:none");
    
    nombre = document.getElementById("nombre").value;
    //El nombre es requerido, por eso comprobamos que tenga tamaño > 0.
    if (nombre.length > 0){
        if(array_validaciones.includes("dni")){
            //ya está validado
        }
        else{
        array_validaciones.push("nombre");
        console.log(array_validaciones);
        }
        validacion_final()
    }else{
        console.log("error comprobación del nombre")
        document.getElementById("span_nombre").setAttribute("style","display:initial")
    }
}

function validarDNI(){
    document.getElementById("span_dni").setAttribute("style","display:none");
    
    dni = document.getElementById("dni").value;
    //El dni tiene el aiguiente formato: 12345678L
    //La expresión regular del dni es: /^(\d{8})([A-Z])$/
    var DNI_REGEX = /^(\d{8})([A-Z])$/;

    if (dni.match(DNI_REGEX)){
        if(!array_validaciones.includes("dni")){
            array_validaciones.push("dni");
        }
        console.log(array_validaciones)
        validacion_final()
        }else{
        console.log("error comprobación del dni")
        document.getElementById("span_dni").setAttribute("style","display:initial")
        }
}

function validarCoche(){
    document.getElementById("span_coche").setAttribute("style","display:none");
    coche = document.getElementById("cars").value;
    /*
    if (array_validaciones.includes("coche")){
        array_validaciones.remove("coche");
    }*/

    console.log(coche);
    //El único posible es audi
    if (coche == "audi"){
        if(!array_validaciones.includes("coche")){
            array_validaciones.push("coche");
        }
        validacion_final()
        }else{
        console.log("error comprobación del coche")
        document.getElementById("span_coche").setAttribute("style","display:initial")
        }       
}

function validacion_final(){
    //Comprobamos si array_validaciones = 3,
    //En caso afirmativo, desbloqueamos enviar.
    if(array_validaciones.lenght == 3){
        enviar.removeAttribute("disabled");
    }else{
        enviar.disabled = true;
    }
}

function enviarformulario(){
    alert("Recibido correctamente con los datos: Nombre: "+nombre+ " Dni: "+dni+ " y el coche escogido: "+coche)
}

/*
*
*En caso positivo, habilitamos el envío.
*
*/




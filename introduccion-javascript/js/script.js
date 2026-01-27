// alert ("Hola mundo JS");
/*
Comentario en bloque
*/

console.log("Hola Mundo JS");

// Array  Definition
/*
var first_array = [];
var second_array = new Array (1);
var third_array = new Array (3,5,6,8);
var fourth_array = new Array (3,5,"Sevilla","La Algaba",true,third_array);

console.log(third_array[1]);
console.log(fourth_array[5][0]);

fourth_array.push("Andalucía");

console.log(fourth_array.length);

for(let i = 0; i<fourth_array.length;i++){
    console.log("El valor de i es: "+i)
    console.log(fourth_array[i]);
}

var DNI_REGEX = /^(\d {8}) ([A-Z])$/;
let dni = "12345678K";
if(dni.match(DNI_REGEX)){
    console.log("Correct DNI");
    }
    else{
        console.log("Incorrect DNI");
    }
*/
/*
let today = new Date();
let first_october = new Date(2022, 9 , 1);
console.log(today);
console.log(first_october);
console.log(today.getDay())
*/
// MyFirstFunction() se ejecuta al hacer click en el botón

function myFirstFunction(nombre, apellidos){
console.log("Tu nombre es: " + nombre+" y tu apellido es: "+apellidos);
}

function myFirstFunction_ok(){
console.log("Thank you for you click.");
}

function myFirstFunction_mouseover(){
console.log("Thank you for you interest.");
}

function validarCorreo(correo){
    var regex= /^\S+@\S+\.\S+$/;
    if(correo.match(regex)){
        return true;
    }
    else{
        return false;
    }
}
$("#btn").addEventListener("click",function(){
    
    //Limpiamos span
    $("error_email")

    /*var input = document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","Pon tu email");
    input.setAttribute("name","tuemail");
    $("#tablero").appendChild(input);
    console.log("Thank you for you click (from JS).");*/
    var correo =$("#email").value;

    if(correo.length > 0 ){
        if(validarCorreo(correo)){
            console.log("Thank you for you click (from JS). "+correo);
        }
        else{
            $("#error_mail").setAttribute("style","display:inherit;");
        }
    }
    else{
        $("#error_mail").setAttribute("style","display:inherit;");
    }
    });

function $(elemento){
return document.querySelector(elemento);
}
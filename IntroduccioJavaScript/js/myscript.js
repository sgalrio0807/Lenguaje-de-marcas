//alert("Hello to JS");

/*var table = "Normal Table";
let chair = "One chair";
console.log(table); 
console.log(chair);*/

/*tipo de variables
let testBoolean = false;
console.log(testBoolean);
let testNumber = 10;
console.log(testNumber);
let testString = 'test';
console.log(testString);*/

/*Orientado a objetos
let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);
let testStringObject = new String('text');
console.log(testStringObject);*/

/*Concatenacion de variables
let name = 'Jhon';
let surname = 'Doe';
let question = 'How are you ' +name+ ' ' +surname+ '?';
console.log(question);

let name = 'Jhon';
let surname = 'Doe';
let age = 23;
let question = `How old is ${name} ${surname} ?`;
let answer = 'He is ' +age+ ' years old';
console.log(question);
console.log(answer);

let name = 'Jhon';
let surname = 'Doe';
let question = 'How are you ' .concat(name)+' ' .concat(surname)+ '?';
console.log(question);*/

//array
/*var first_array = [];
var second_array = new Array(1);
var third_array = new Array(3,5,6,8);
var fourth_array = new Array(3,5,"Sevilla","La Algaba",true,third_array)

console.log(third_array[1]);
console.log(fourth_array[5][0]);
fourth_array.push("Andalucia")
console.log(fourth_array[6])

for (let i=0; i<fourth_array.length;i++){
    console.log("El valor de i es " + i)
    console.log(fourth_array[1]);
}*/

//if dni
/*var dni_regex = /^(\d{8})([A-Z])$/;
let dni = "12345678K";
if(dni.match(dni_regex)){
    console.log("DNI corecto");
}else{
    console.log("DNI incorrecto");
}

let today = new Date();
console.log(today.getDay());*/

//Myfirstfunction() se ejecuta al hacer clip en el boton

function Myfirstfunction(nombre, apellidos){
    console.log("Mi nombre es: " +nombre+ " y mi apellido es: " +apellidos);
}
function Myfirstfunction_ok(){
    console.log("Thanks for your interest");
}
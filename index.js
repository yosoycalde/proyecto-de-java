//camel
// tipos de variables
// var numero =4; = no se utiliza por actualizar
let saludo = "saludo";
const pi = 3.1416;

// tipos de datos
//numeros

let entero = 10;
let decimal = 3.1416;

//string = texto
let pregunta = "¿Que hora es?";
let respuesta = "son las 4 pm";

//boolean
let esMayordeedad = true;
let tienepermiso = false;

//undefine
let valor;
console.long(valor); //undefine

//null
let nota = null;

let persona = {
  nombre: "juan",
  edad: 30,
  estrabajador: true,
  habilidades: {
    produccion: 5.0,
    empaque: 3.0,
  },
};
//arreglos
let numero = [1, 2, 3, 4, 4, 5, 6, 5, 67, 0];
let frutas = ["manzanas", "peras", "sandia"];

// operadores aritmeticos

//suma

let suma = 5 + 4; //9

// resta

let resta = 5 - 4; //1

//multiplicacion

let multiplicacion = 5 * 4; //20

//divicion

let divicion = 5 / 4; //1.25

//modulo

let modulo = 5 % 4;

//operadores de asignacion
// igual =

let numeros = 5;

// suma y aigna
numeros += 3; //equiovale numero 8

//  resta y asignan

numeros -= 2; //equivale a numeero 3

//operadores de compararcion

//igualdad debil ==

let resultado = 5 == "5"; //true

//igualdad estricta ===

resultado = 5 === 5; //true

//diferencia debil !=

resultado = 23 != "23"; //false

// diferente estricta !==

resultado = 23 !== 50; //false

//mayor que >

//menor que <

//mayor o igual >=

//menor o igual <=

let esMayor = 10 > 5; //true

let esMenor = 5 < 6; //true

let mayorOIgual = 10 >= 5; //true

let menorOIgual = 5 <= 6; //false

//operadores logicos

// y logico &&

let resultados = 5 > 3 && 7 < 10; //true

//O logico ||

resultados = 5 > 3 && 18 < 10; //true

//No logico !
let esFalso = !(5 > 10); //true (se invierten)

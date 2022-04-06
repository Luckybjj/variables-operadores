//Desafio Uso de Variables y Operadores
document.write("<h1>Uso de Variables y Operadores</h1><hr>");

//Ejercicio N°2
document.write("<h3>Ejercicio N°1: Operaciones con dos números</h3>")

//Obtener datos del usuario

var num1 = parseInt(prompt("Ingrese un número distinto de cero"));
var num2 = parseInt(prompt("Ingrese un numero distinto mayor a cero"));

//Operaciones
var sum = num1 + num2;
var rest = num1 - num2;
var mult = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;

//mostrar en pantalla
document.write(`La suma de los números ingresados es: ${sum}<br>`);
document.write(`La resta de los números ingresados es: ${rest}<br>`);
document.write(`La multiplicacion de los números ingresados es: ${mult}<br>`);
document.write(`La división de los números ingresados es: ${div.toFixed(1)}<br>`);
document.write(`El módulo de los números ingresados es: ${mod}<hr>`);


//Ejercicio N°3
document.write("<h3>Ejercicio N°2: Calculo de grados Celcius a Kelvin y Fahrenheit</h3>");
//Obtener datos del usuario
var temp = parseFloat(prompt("Ingrese temperatura en °Celcius"));

//Asignación se constantes
const K = 273.15;
const F = 9/5;

//Calculos
var kelvin = (K + temp);
var fahrent = (temp * F) + 32;
//Mostrar en pantalla
document.write(`La temperatura en Kelvin es ${kelvin}°K<br>`);
document.write(`La temperatura en Fahrenheit es ${fahrent}°F<hr>`);


//Ejercicio N°4
document.write("<h3>Ejercicio N°4: Dias equivalentes en años semanas y días</h3>")

//Días ingresados por el usuario
var d = parseInt(prompt("Ingrese cantidad de días"));

//Operaciones
var año = Math.floor(d/365);
var restoA = d % 365;
var semana = Math.floor(restoA/7)
var dias = restoA % 7

//Mostrar en Pantalla
document.write(`Son equivalentes a ${año} año(s), ${semana} semana(s), ${dias} dia(s)<hr>`);


//Ejercicio N°5
document.write("<h3>Ejercicio N°5: Solicitar al Usuario que ingrese 5 números</h3>");

//Datos requeridos al usuario
alert("Por favor ingrese 5 números");
var n1 = parseInt(prompt("Ingrese el primer número"));
var n2 = parseInt(prompt("Ingrese el segundo número"));
var n3 = parseInt(prompt("Ingrese el tercer número"));
var n4 = parseInt(prompt("Ingrese el cuarto número"));
var n5 = parseInt(prompt("Ingrese el quinto número"));
//Operaciones
var suma = (n1 + n2 + n3 + n4 + n5);
var promedio = (suma/5);
//Mostrar en pantalla
document.write(`La suma de los números ingresados es igual a: ${suma}<br>`);
document.write(`El promedio de los números ingresados es igual a: ${promedio.toFixed(1)}<hr>`);



















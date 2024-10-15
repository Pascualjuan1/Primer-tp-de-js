/* Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo:
input: 20 Output: El 20 es divisible por 2.*/

let num1 = prompt('');

if  (num1%2 == 0 || num1%5 == 0 || num1%3 == 0 || num1%7 == 0) {
    document.write('el numero ' + num1 + ' es divisible por uno de estos 4 numeros' )
}else{
    document.write('el numero ' + num1 + ' no es divisible por uno de estos 4 numeros' )
    
}
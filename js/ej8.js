/*Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/

let num1 =(prompt (''));
let valor = num1 % 2
if ( valor == 0) {
    document.write('el '+ num1 +' es divisible en 2');
}else{
    document.write('el '+ num1 +' no es divisible en 2');

}
/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/
let num1 = parseInt(prompt ());
let num2 = parseInt(prompt ());
let num3 = parseInt(prompt ());

if (num1 > num2 && num1 > num3){
    document.write('el numero ' + num1 + ' es el mas grande');
}else{
    if ( num2 > num3){
    document.write('el numero ' + num2 + ' es el mas grande');
}else{
    document.write('el numero ' + num3 + ' es el mas grande');
}
}
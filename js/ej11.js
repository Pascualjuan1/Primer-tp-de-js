// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay
    // que decir todos por los que es divisible)
    // Ejemplo:
    // input: 20
    // input: 210
    // Output: El 20 es divisible por 2 y por 5.
    // Output: El 210 es divisible por 2, por 3,
    // por 5 y por 7.

    let num1 = prompt('');
    let array = [2,3,5,7];

    for (let i=0; i<array.length; i++){
        if (num1%array[i] == 0){
            document.write(' el numero es divisible por ' + (array[i]))
        }
    }

    // if  (num1%2 == 0 && num1%5 == 0 && num1%3 == 0 && num1%7 == 0) {
    //     document.write('el numero ' + num1 + ' es divisible por 2, 3, 5 y 7')
    // }else{
    //     if (num1%2 == 0 && num1%5 == 0 && num1%3 == 0) {
    //         document.write('el numero ' + num1 + ' es divisible por 2, 3 y 5')
    //     }else{
    //         if(num1%2 == 0 && num1%3 == 0 ) {
    //             document.write('el numero ' + num1 + ' es divisible por 2 y 3')
    //         }else{
    //             if(num1%2 == 0) {
    //                 document.write('el numero ' + num1 + ' es divisible por 2' )
    //             }else{
    //                 document.write('este numero no es divisible por ninguno de estos 4 numero')
    //             }
    //         }
    //     }
    // }

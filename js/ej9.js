/* Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
input: Hola mundo Output: oauo*/

var cadena = String(prompt());
let cont = 0;
    // document.write(cadena);
    
    for (var i = 0; i < cadena.length; i++){
        if  (cadena.charAt(i) == "a" ||cadena.charAt(i) == "e" || cadena.charAt(i) == "i" || cadena.charAt(i) == "o" || cadena.charAt(i) == "u" ){
            
            document.write(cadena.charAt(i));
            
        }
    }
    
        
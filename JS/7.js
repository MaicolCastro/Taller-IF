// Solicitamos al usuario que ingrese su género (femenino o masculino)
let G = prompt("Ingrese su género (femenino o masculino)");

// Solicitamos al usuario que ingrese su edad y la convertimos a un número entero
let E = parseInt(prompt("Ingrese su edad"));

// Declaramos la variable ayuda para almacenar el valor de la ayuda mensual
let ayuda;

// Comenzamos el bucle do while
do {
    // Evaluamos el género del usuario
    if (G === "femenino") {
        // Evaluamos la edad del usuario
        if (E > 50) {
            ayuda = 120000; // Ayuda de 120000 si la edad es mayor a 50
        } else if (E >= 30 && E <= 50) {
            ayuda = 100000; // Ayuda de 100000 si la edad está entre 30 y 50
        } else {
            ayuda = 0; // Sin ayuda si la edad es menor a 30
        }
    } else if (G === "masculino") {
        ayuda = 40000; // Ayuda de 40000 para género masculino
    } else {
        ayuda = "Género no válido"; // Mensaje de género no válido
    }

    // Mostramos el valor de la ayuda mensual en una alerta
    alert(`El valor de la ayuda mensual es: ${ayuda}`);
    
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

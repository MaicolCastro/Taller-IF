    l// Solicitamos al usuario que ingrese el tiempo de la membresía (15, 30 o 90 días) y lo convertimos a un número entero
let M = parseInt(prompt("Ingrese el tiempo de la membresía (15, 30 o 90 días)"));

// Definimos los costos de membresía según el tiempo
let C15D = 18000;
let C30D = 35000;
let C3M = 86000;

// Declaramos la variable C para almacenar el costo de la membresía
let C;

// Comenzamos el bucle do while
do {
    // Utilizamos una estructura switch para determinar el costo de la membresía según el tiempo ingresado
    switch (M) {
        case 15:
            C = C15D; // Costo para membresía de 15 días
            break;
        case 30:
            C = C30D; // Costo para membresía de 30 días
            break;
        case 90:
            C = C3M; // Costo para membresía de 90 días
            break;
        default:
            C = "Tiempo de membresía no válido"; // Mensaje para tiempo de membresía no válido
    }

    // Mostramos el costo de la membresía en una alerta
    alert(`El costo de tu membresía es: ${C}`);
    
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

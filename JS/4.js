// Solicitamos al usuario que ingrese un número
let N = prompt("Ingrese un número");
let R; // Variable que almacena el resultado

// Comenzamos el bucle do while
do {
    // Utilizamos una estructura switch para evaluar si el número es par o impar
    switch (N % 2) {
        case 0:
            R = "El número es par"; // Asignamos "El número es par" si el resto de la división por 2 es 0
            break;
        case 1:
            R = "El número es impar"; // Asignamos "El número es impar" si el resto de la división por 2 es 1
            break;
        default:
            R = "El número es inválido"; // Asignamos "El número es inválido" para cualquier otro caso
    }
    // Mostramos el resultado en una alerta
    alert(R);
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);



let numero = 8; // Variable que indica el número a evaluar
let resultado; // Variable que almacena el resultado

// Comenzamos el bucle do while
do {
    // Utilizamos una estructura switch para evaluar si el número es par o impar
    switch (numero % 2) {
        case 0:
            resultado = "El número es par"; // Asignamos "El número es par" si el resto de la división por 2 es 0
            break;
        case 1:
            resultado = "El número es impar"; // Asignamos "El número es impar" si el resto de la división por 2 es 1
            break;
        default:
            resultado = "Valor inválido"; // Asignamos "Valor inválido" para cualquier otro caso
    }
    // Mostramos el resultado en una alerta
    alert(resultado);
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

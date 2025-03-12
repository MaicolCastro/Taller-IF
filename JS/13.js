// Solicitamos al usuario que ingrese su operador y lo convertimos a minúsculas
let O = prompt("Ingrese su operador (claro, tigo o movistar): ").toLowerCase();

// Solicitamos al usuario que ingrese la cantidad de Minutos Internacionales consumidos y lo convertimos a un número entero
let MI = parseInt(prompt("Ingrese la cantidad de Minutos Internacionales consumidos: "));

let CF, VMI, VPD; // Variables para almacenar el cargo fijo, el valor por minuto internacional y el valor por datos

// Comenzamos el bucle do while
do {
    // Utilizamos una estructura switch para determinar los valores según el operador ingresado
    switch(O) {
        case "claro":
            CF = 30000; // Cargo fijo para claro
            VMI = 100;  // Valor por minuto internacional para claro
            VPD = 18000; // Valor por datos para claro
            break;
        case "tigo":
            CF = 45000; // Cargo fijo para tigo
            VMI = 200;  // Valor por minuto internacional para tigo
            VPD = 12000; // Valor por datos para tigo
            break;
        case "movistar":
            CF = 40000; // Cargo fijo para movistar
            VMI = 250;  // Valor por minuto internacional para movistar
            VPD = 8000; // Valor por datos para movistar
            break;
        default:
            alert(`Operador no válido.`); // Mensaje para operador no válido
            CF = 0;
            VMI = 0;
            VPD = 0;
    }

    // Calculamos el costo total del paquete de promoción
    let CT = CF + (VMI * MI) + VPD;

    // Verificamos si el cargo fijo es diferente de cero para asegurarnos de que se ingresaron los valores correctos
    if (CF !== 0) {
        alert(`El costo total del paquete de promoción es: ${CT}`);
    }
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

// Solicitamos al usuario que ingrese el número del modelo de su carro y lo convertimos a un número entero
let NM = parseInt(prompt("Ingrese el número del modelo de su carro: "));
let M; // Variable para almacenar el mensaje

// Comenzamos el bucle do while
do {
    // Utilizamos una estructura switch para evaluar si el modelo del carro está defectuoso
    switch (NM) {
        case 119:
        case 179:
        case 189:
        case 190:
        case 191:
        case 192:
        case 193:
        case 194:
        case 195:
        case 221:
        case 780:
            M = "El automóvil está defectuoso, llevar a garantía."; // Mensaje si el modelo está defectuoso
            break;
        default:
            M = "Su automóvil no está defectuoso."; // Mensaje si el modelo no está defectuoso
    }
    // Mostramos el mensaje en una alerta
    alert(M);
    
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

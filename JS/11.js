// El .toLowerCase(); es para convertir las respuestas del usuario a minúsculas y así poder compararlas
let EP = prompt("¿El computador emite un pitido al iniciarse? (sí/no)").toLowerCase();
let DG = prompt("¿El disco duro gira? (sí/no)").toLowerCase();

let M; // Variable para almacenar el mensaje

// Comenzamos el bucle do while
do {
    // Evaluamos las condiciones dadas por las respuestas del usuario
    if (EP === "si" && DG === "si") {
        M = "Póngase en contacto con el técnico de apoyo.";
    } else if (EP === "si" && DG === "no") {
        M = "Verificar contactos de la unidad.";
    } else if (EP === "no" && DG === "no") {
        M = "Traiga la computadora para repararla en la central.";
    } else if (EP === "no" && DG === "si") {
        M = "Compruebe la conexión de altavoces.";
    } else {
        M = "Información no válida.";
    }

    // Mostramos el mensaje en una alerta
    alert(M);

// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);


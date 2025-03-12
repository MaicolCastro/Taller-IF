// Solicitamos al usuario que ingrese el tamaño del sándwich y lo convertimos a minúsculas
let TMÑ = prompt("Ingrese el tamaño de su sándwich (pequeño o grande)").toLowerCase();
// Solicitamos al usuario que ingrese si desea tocineta y lo convertimos a minúsculas
let T = prompt("¿Desea tocineta? (sí/no)").toLowerCase();
// Solicitamos al usuario que ingrese si desea jalapeño y lo convertimos a minúsculas
let J = prompt("¿Desea jalapeño? (sí/no)").toLowerCase();
// Solicitamos al usuario que ingrese si desea pavo y lo convertimos a minúsculas
let P = prompt("¿Desea pavo? (sí/no)").toLowerCase();
// Solicitamos al usuario que ingrese si desea queso y lo convertimos a minúsculas
let Q = prompt("¿Desea queso? (sí/no)").toLowerCase();

let CB; // Variable para almacenar el costo base del sándwich
let CA = 0; // Variable para almacenar el costo adicional

// Comenzamos el bucle do while
do {
    // Evaluamos el tamaño del sándwich
    if (TMÑ === "pequeño") {
        CB = 6000; // Costo base para sándwich pequeño
    } else if (TMÑ === "grande") {
        CB = 12000; // Costo base para sándwich grande
    } else {
        alert(`Tamaño no válido.`);
        CB = 0; // Asignamos 0 si el tamaño no es válido
    }

    // Evaluamos las opciones adicionales y sumamos el costo correspondiente
    if (T === "sí") {
        CA += 3000; // Costo adicional por tocineta
    }

    if (J === "sí") {
        CA += 0; // Sin costo adicional por jalapeño
    }

    if (P === "sí") {
        CA += 3000; // Costo adicional por pavo
    }

    if (Q === "sí") {
        CA += 2500; // Costo adicional por queso
    }

    // Calculamos el costo total
    let CT = CB + CA;

    // Verificamos si el costo base es diferente de cero para asegurarnos de que se ingresaron los valores correctos
    if (CB !== 0) {
        alert(`El costo total del pedido es: ${CT}`);
    }

// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

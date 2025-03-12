// Solicitamos al usuario que ingrese el número de copias y lo convertimos a un número entero
let NC = parseInt(prompt("Ingrese el número de copias que va a imprimir: "));
let PPC; // Variable para almacenar el precio por copia

// Comenzamos el bucle do while
do {
    // Utilizamos una estructura switch para determinar el precio por copia según el número de copias
    switch (true) {
        case (NC >= 0 && NC <= 499):
            PPC = 120; // Precio por copia para 0 a 499 copias
            break;
        case (NC >= 500 && NC <= 749):
            PPC = 100; // Precio por copia para 500 a 749 copias
            break;
        case (NC >= 750 && NC <= 999):
            PPC = 80; // Precio por copia para 750 a 999 copias
            break;
        case (NC >= 1000):
            PPC = 50; // Precio por copia para 1000 o más copias
            break;
        default:
            PPC = NaN; // El valor NaN indica que el número ingresado no es válido
    }

    // Calculamos el precio total
    let PT = PPC * NC;

    // Mostramos el precio por copia y el precio total en una alerta
    alert(`El precio por copia es: ${PPC} y el precio total de sus copias es: ${PT}`);
    
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

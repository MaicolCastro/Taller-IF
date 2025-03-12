// Solicitamos al usuario que ingrese el tipo de lavadora que eligió (1 o 2)
let TL = parseInt(prompt("Ingrese el tipo de lavadora que eligió 1 o 2"));

// Solicitamos al usuario que digite la cantidad de lavadoras que va a alquilar
let C = parseInt(prompt("Digite la cantidad de lavadoras que va a alquilar"));

// Solicitamos al usuario que digite la cantidad de horas que las va a alquilar
let H = parseInt(prompt("Digite la cantidad de horas que las va a alquilar"));

// Declaramos la variable CPH para almacenar el costo por hora
let CPH;

// Comenzamos el bucle do while
do {
    // Utilizamos una estructura switch para determinar el costo por hora según el tipo de lavadora
    switch (TL) {
        case 1:
            CPH = 4000; // Costo por hora para lavadora tipo 1
            break;
        case 2:
            CPH = 3000; // Costo por hora para lavadora tipo 2
            break;
        default:
            CPH = 0; // Valor predeterminado si el tipo de lavadora no es válido
    }

    // Calculamos el costo total
    let CT = CPH * C * H;

    // Aplicamos un descuento si la cantidad de lavadoras es mayor a 3
    if (C > 3) {
        CT *= 0.97; // Aplicamos un descuento del 3%
    }

    // Mostramos el costo total en una alerta
    alert(`Costo total por alquiler ${C} lavadoras tipo ${TL} por ${H} horas: ${CT}`);

    // La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

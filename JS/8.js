let M = parseInt(prompt("Ingrese el tiempo de la membresia (15, 30 o 90 dias)"))

let C15D = 18000;
let C30D = 35000;
let C3M = 86000;

let C;

switch (M) {
    case 15:
        C = C15D;
        break;
    case 30:
        C = C30D;
        break;
    case 90:
        C= C3M;
        break;
    default:
        C = "Tiempo de membresia no valido";
}
alert(`El costo de tu membresia es: ${C}`)
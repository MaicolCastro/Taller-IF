let NC = parseInt(prompt("Ingrese el numero de copias que va a imprimir: "))
let PPC;

switch (true) {
    case (NC >= 0 && NC <= 499):
        PPC = 120;
        break;
    case (NC >= 500 && NC <= 749):
        PPC = 100;
        break;
    case (NC >= 750 && NC <= 999):
        PPC = 80;
        break;
    case (NC >= 100):
        PPC = 50;
        break;
    default:
        PPC = NaN; /*El NaN significa que el valor que esta ingresando no es valido, por lo que la operacion matematica 
                   no se puede hacer*/ 
}

let PT = PPC * NC;

alert(`El precio por copia es: ${PPC} y el precio total de sus copias es: ${PT}`)
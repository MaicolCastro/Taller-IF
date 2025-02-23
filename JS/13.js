let O = prompt("Ingrese su operador (claro, tigo o movistar): ").toLowerCase();
let MI = parseInt(prompt("Ingrese la cantidad de Minutos Internacionales consumidos: "))

let CF, VMI, VPD;

switch(O) {
    case "claro":
        CF = 30000;
        VMI = 100;
        VPD = 18000;
        break;
    case "tigo":
        CF = 45000;
        VMI = 200;
        VPD = 12000;
        break;
    case "movistar":
        CF = 40000;
        VMI = 250;
        VPD = 8000;
        break;
    default:
        alert(`Operador no valido.`);
        CF = 0;
        VMI = 0;
        VPD = 0;
}

let CT = CF + (VMI * MI) + VPD;

/*Aca o que estamos haciendo es mirar si el usuario ingreso un operador valido, si el cargo fijo es diferente de cero es porque
se ingresaron los valores correctos*/
if (CF !== 0){

    alert(`El costo total del paquete de promocion es: ${CT}`)
}
let NM = parseInt(prompt("Ingrese el numero del modelo de su carro: "))
let M;

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
        M = "El automovil esta defectuoso, llevar a garantia.";
        break;
    default:
        M = "Su automovil no esta defectuoso.";
}
alert(M);
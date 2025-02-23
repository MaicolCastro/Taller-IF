let TL = parseInt(prompt("Ingrese el tipo de lavadora que eligio 1 o 2"))
let C = parseInt(prompt("Digite la cantidadd de lavadoras que va a alquilar"))
let H = parseInt(prompt("Digite la cantidad de horas que las va a alquilar"))
let CPH;

switch(TL) {
    case 1:
        CPH = 4000;
        break;
    case 2:
        CPH = 3000;
        break;
    default:
        CPH = 0
}

let CT = CPH * C * H;
 if(C > 3) {
    CT *= 0.97;
 }

alert(`Costo total por alquiler ${C} lavadoras tipo ${TL} por ${H} horas: ${CT}`)
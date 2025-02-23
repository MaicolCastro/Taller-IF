let N = prompt("Ingrese un numero")
let R;

switch (N % 2) {
    case 0:
        R = "El numero es par";
        break;
    case 1:
        R= "El numero es impar";
        break;
    default:
        R= "El numero es invalido";
}
alert(R);


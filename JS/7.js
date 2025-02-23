let G = prompt("Ingrese su genero (femenino o masculino)")
let E = parseInt(prompt("Ingrese su edad"))
let ayuda;

if (G === "femenino") {
    if (E > 50){
        ayuda = 120000;
    } else if (E >= 30 && E <= 50) {
        ayuda = 100000;
    } else {
        ayuda = 0
    }
} else if (G === "masculino") {
    ayuda = 40000;
} else {
    ayuda = "Genero no valido";
}
alert(`El valor de la ayuda mensual es: ${ayuda}`)   
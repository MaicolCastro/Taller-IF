let Fisica = parseFloat(prompt("Ingrese su nota de Fisica (0-10)"))     /*El parsefloat quiere decir que el numero que ingres puede ser entero o decimal */
let Quimica = parseFloat(prompt("Ingrese su nota de Quimica (0-10)"))      
let Biologia = parseFloat(prompt("Ingrese su nota de Biologia (0-10)"))
let Matematicas = parseFloat(prompt("Ingrese su nota de Matematicas  (0-10)"))
let Informatica = parseFloat(prompt("Ingrese su nota de Informatica (0-10)"))
let CC;

let SC = Fisica + Quimica + Biologia + Matematicas + Informatica;
let PF = (SC / 50) * 100;

if (PF >= 0 && PF <= 59.9) {
    CC = "Mala";
} else if (PF >= 60 && PF <= 80){
    CC = "Buena";
} else if (PF > 80){
    CC = "Excelente";
} else {
    CC = "Calificacion no valida";
}
alert(`Su porcentaje es ${PF} y su nota es ${CC}`)



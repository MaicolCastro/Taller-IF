// Solicitamos al usuario que ingrese su nota de Física (0-10) y la convertimos a un número decimal
let Fisica = parseFloat(prompt("Ingrese su nota de Física (0-10)"));

// Solicitamos al usuario que ingrese su nota de Química (0-10) y la convertimos a un número decimal
let Quimica = parseFloat(prompt("Ingrese su nota de Química (0-10)"));

// Solicitamos al usuario que ingrese su nota de Biología (0-10) y la convertimos a un número decimal
let Biologia = parseFloat(prompt("Ingrese su nota de Biología (0-10)"));

// Solicitamos al usuario que ingrese su nota de Matemáticas (0-10) y la convertimos a un número decimal
let Matematicas = parseFloat(prompt("Ingrese su nota de Matemáticas (0-10)"));

// Solicitamos al usuario que ingrese su nota de Informática (0-10) y la convertimos a un número decimal
let Informatica = parseFloat(prompt("Ingrese su nota de Informática (0-10)"));

// Declaramos la variable CC para almacenar la calificación final
let CC;

// Calculamos la suma de todas las notas
let SC = Fisica + Quimica + Biologia + Matematicas + Informatica;

// Calculamos el porcentaje final
let PF = (SC / 50) * 100;

// Comenzamos el bucle do while
do {
    // Evaluamos el porcentaje final para asignar la calificación correspondiente
    if (PF >= 0 && PF <= 59.9) {
        CC = "Mala";
    } else if (PF >= 60 && PF <= 80) {
        CC = "Buena";
    } else if (PF > 80) {
        CC = "Excelente";
    } else {
        CC = "Calificación no válida";
    }

    // Mostramos el porcentaje y la calificación en una alerta
    alert(`Su porcentaje es ${PF} y su nota es ${CC}`);
    
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);




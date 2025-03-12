// Solicitamos al usuario que digite su nombre completo
let username = prompt("Digite su nombre completo");

// Solicitamos al usuario que digite sus horas trabajadas y las convertimos a un número entero
let hours = parseInt(prompt("Digite sus horas trabajadas"));

// Declaramos la variable payment para almacenar el salario calculado
let payment;

// Comenzamos el bucle do while
do {
    // Verificamos si las horas trabajadas son menores o iguales a 10
    if (hours <= 10) {
        payment = 30000 * hours; // Calculamos el salario multiplicando las horas por 30000
    } else {
        payment = 33000 * hours; // Calculamos el salario multiplicando las horas por 33000
    }
    // Mostramos el resultado en una alerta
    alert(`Señor/a ${username}, el número de horas es ${hours} y su salario equivale a ${payment}`);
    
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

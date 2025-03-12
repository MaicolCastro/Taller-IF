// Solicitamos al usuario que ingrese tres ángulos y los convertimos a números enteros
let A1 = parseInt(prompt("Ingrese el primer ángulo: "));
let A2 = parseInt(prompt("Ingrese el segundo ángulo: "));
let A3 = parseInt(prompt("Ingrese el tercer ángulo: "));

// Calculamos la suma de los tres ángulos
let SA = A1 + A2 + A3;

// Comenzamos el bucle do while
do {
    // Verificamos si la suma de los ángulos es igual a 180
    if (SA === 180) { 
        alert(`El triángulo es válido.`);
    } else {
        alert(`El triángulo no es válido.`);
    }
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);

// Solicitamos al usuario que ingrese tres números y los convertimos a números
let N1 = Number(prompt("Enter the first number: "));
let N2 = Number(prompt("Enter the second number: "));
let N3 = Number(prompt("Enter the third number: "));

// Declaramos la variable NM para almacenar el número mayor
let NM;

// Comenzamos el bucle do while
do {
    // Verificamos si N1 es mayor o igual a N2 y N3
    if (N1 >= N2 && N1 >= N3){
        NM = N1; // Asignamos N1 a NM si N1 es el mayor o igual a los otros dos números
    } 
    // Verificamos si N2 es mayor o igual a N1 y N3
    else if (N2 >= N1 && N2 >= N3){
        NM = N2; // Asignamos N2 a NM si N2 es el mayor o igual a los otros dos números
    } 
    // En caso contrario, N3 es el mayor
    else {
        NM = N3; // Asignamos N3 a NM si N3 es el mayor número
    }
    // Mostramos el número mayor en una alerta
    alert(`The larger number is: ${NM}`);
    
// La condición del bucle es false para asegurarnos de que el bucle se ejecute solo una vez
} while (false);


let TMÑ = prompt("Ingrese el tamaño de su sandwich (pequeño o grande)").toLowerCase();
let T = prompt("¿Desea tocineta? (si/no)").toLowerCase();
let J = prompt("¿Desea jalapeño? (si/no)").toLowerCase();
let P = prompt("Desea pavo? (si/no)").toLowerCase();
let Q = prompt("¿Desea queso? (si/no)").toLowerCase();

let CB;

if (TMÑ === "pequeño") {

    CB = 6000;

} else if (TMÑ === "grande") {

    CB = 12000;

} else {

    alert(`Tamaño no valido.`);
    CB = 0;

}

let CA = 0;

if (T === "si"){

    CA += 3000;

} 

if (J === "si"){

    CA += 0;

} 

if (P === "si"){

    CA += 3000;

}

if (Q === "si"){

    CA += 2500;
}

let CT = CB + CA;

if(CB !== 0){

    alert(`El costo total del pedido es: ${CT}`)
}

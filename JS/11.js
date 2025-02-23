//El .toLowerCase(); es para convertir las respuestas del usuario a minusculas y asi poder compararlas
let EP = prompt("¿ El computador emite un pitido al iniciarse? (si/no)").toLowerCase();
let DG = prompt("¿El disco duro gira? (si/no)").toLowerCase();

let M;

if (EP === "si" && DG === "si"){

    M = "Pongase en contacto con el tecnico de apoyo.";

} else if (EP === "si" && DG === "no"){

    M = "Verificar contactos de la unidad.";

} else if (EP === "no" && DG === "no"){

    M = "Traiga la computadora para repararla en la central.";

}else if (EP === "no" && DG === "si"){

    M = "Compruebe la conexion de altavoces.";

}else {

    M = "Informacion no valida.";

}
alert(M);
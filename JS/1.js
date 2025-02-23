let username = prompt("Digite su nombre completo")
let hours = parseInt(prompt("Digite sus horas trabajadas"))
let payment;

if (hours <= 10){

    payment = 30000 * hours;

}else{

    payment = 33000 * hours;

}
alert(`Señor/a ${username}, el numero de horas es ${hours} y su salario equivale a ${payment}`)

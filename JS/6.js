let N1 = Number(prompt("Enter the first number: "))
let N2 = Number(prompt("Enter the second number: "))
let N3 = Number(prompt("Enter the third number: "))
let NM;

if (N1 >= N2 && N1 >= N3){
    NM = N1;
} else if (N2 >= N1 && N2 >= N3){
    NM = N2;
} else {
    NM = N3;
}
alert(`The larger number is: ${NM}`)

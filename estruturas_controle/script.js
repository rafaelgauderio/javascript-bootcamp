const peso = 72.0;
const altura = 1.75;
let imc = peso / (altura * altura);

console.log("\nEstrutura de controle if, else if, else");

if (imc <= 0) {
    console.log("Informe valores inválidos")
} else if(imc > 0 && imc < 18.5) {
    console.log("IMC:" + imc.toFixed(2) + ", magreza");
}  else if(imc >= 18.5 && imc < 24.9) {
    console.log("IMC:" + imc.toFixed(2) + ", normal");
} else if(imc >= 24.9 && imc < 29.9) {
    console.log("IMC:" + imc.toFixed(2) + ", sobrepeso");
} else if(imc >= 29.9 && imc < 39.9) {
    console.log("IMC:" + imc.toFixed(2) + ", obesidade");
} else {
    console.log("IMC:" + imc.toFixed(2) + ", obesidade grave");
}

console.log("\nEstrutura de controle switch");
const diaDaSemana = 1;
switch (diaDaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Informaste um valor inválido");
}

console.log("\nEstrutuda de controle while");
let i = 20;
while (i > 0) {
    console.log("Valor de i: " + i);
    i=i-2;
}

const nome = "Rafael De Luca"
console.log("\nEstrutuda de controle for");
for(let i=0 ; i < nome.length; i = i + 0.5) {
    console.log(`Valor de i: ${i}`)
}

console.log("\nEstrutura de controle do")
let idade = Number(35);
do {
    console.log(`Idade: ${idade}`);
    idade--;
} while (idade >=0);


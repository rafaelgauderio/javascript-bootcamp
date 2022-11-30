console.log("Uma mandeira de imprimir string literais é com as duplas");
console.log('Funciona também entre aspas simples');
console.log(`Também é possível usar crase para operar com Strings`);

console.log("Interpolando e concatendo strings");
const value=3.1415;
console.log("O valor da variável value é " + value);
// tem que usar a crase para usar interpolação
console.log(`O valor da variável value mais 15 unidades é  ${value + 15}`);

console.log("\nConvertendo entre number e String");

const string1 = value.toString();
console.log("Valor da value convertida para string " +  string1);
console.log(`typeof value ${typeof string1}`)

const string2 = value.toFixed(2);
console.log("Imprimindo com duas casas decimais, value: " + string2);

console.log("\nConvertendo de string para número: ");
let valor1 = Number("17");
console.log(`Valor da variável é: ${valor1} e o tipo é: ${typeof valor1}`)

let valor2 = parseInt("17",10)
console.log(`Valor da variável  na base DECIMAL é: ${valor2} e o tipo é: ${typeof valor2}`)

let valor3 = parseInt("17",8)
console.log(`Valor da variável  na base OCTAL é: ${valor3} e o tipo é: ${typeof valor3}`)

let valor4 = parseInt("17",16)
console.log(`Valor da variável  na base HEXADECIMAL é: ${valor4} e o tipo é: ${typeof valor4}`)

const euller = parseFloat("2.718281");
console.log("\nNúmero de euller: " + euller.toFixed(4))
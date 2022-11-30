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

//funcoes com strings

console.log("\n\n")
const string3 = "Programador Rafael de Luca      ";
console.log(`"Programador Rafael de Luca      "`);

console.log (`Minúscula: ${string3.toLowerCase}`);
console.log (`Maiúscula: ${string3.toUpperCase}`);
// arrays começam no valor 0
console.log (`Valor do caracter na posição 2: ${string3.charAt(1)}`);
console.log (`Valor do caracter na posição 6: ${string3.charAt(5)}`);
console.log (`Valor do caracter na posição 10: ${string3[9]}`);

console.log(`replace: ${string3.replace("Rafael","João")}`);
console.log(`reclace all: ${string3.replace(/a/g,"e")}`);

console.log(`indexOf:  ${string3.indexOf("a")}`);
console.log(`lastIndexOf:  ${string3.lastIndexOf("a")}`);
console.log(`lengh:  ${string3.length}`);

console.log("\nRecortando um pedaço de uma String");
console.log(`substring: ${string3.substring(0,11)}`)

console.log("Pegando o dia de uma data");
let data = "17/12/1992";

const dia = Number(data.substring(0,2));
console.log(dia);

// apagando os espaços em brancos
console.log(`trim: ${string3.trim()}`);



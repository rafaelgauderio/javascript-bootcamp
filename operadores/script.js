// operadores aritméticos
console.log("\nOperadores aritméticos básicos");
console.log(`12 + 5 = ${12 + 5}`);
console.log(`12 - 5 = ${12 - 5}`);
console.log(`12 * 5 = ${12 * 5}`);
console.log(`12 / 5 = ${12 / 5}`);
//resto da divisão
console.log(`Resto da divisão: 12 % 5 = ${12 % 5}`);
console.log(`Exponenciação: 4 ** 2 = ${4 ** 2}`);

console.log("\nOperadores de comparação")
console.log("== ou !=")
console.log("Primeiro converte para um tipo comum e depois compara")
console.log("=== ou !==")
console.log("Leva em consideração o tipo também para fazer a comparação")
console.log(`17 > 5 = ${17 > 5}`);
console.log(`17 < 5 = ${17 < 5}`);
console.log(`17 >= 5 = ${17 >= 5}`);
console.log(`17 <= 5 = ${12 <= 5}`);


console.log("\nObjeto instanciado com a função construtora = referência de memória")
name1 = "Rafael";
name2 = "Rafael";

let string1 = new String("Rafael");
let string2 = new String("Rafael");
console.log(`name1 == name2: ${name1==name2}`);
console.log(`name1 === name2: ${name1===name2}`);
console.log(`string1 == string2: ${string1==string2}`);
console.log(`string1 === string2: ${string1===string2}`);
console.log(`string1 !== string2: ${string1!==string2}`);

console.log("Operadores Lógicos")
console.log(`17 > 12 && 15 > 25: ${17 > 12 && 15 > 25}`);
console.log(`17 > 12 && 15 < 25: ${17 > 12 && 15 < 25}`);
console.log(`17 > 12 || 15 > 25: ${17 > 12 || 15 > 25}`);
console.log(`17 > 12 OR 15 < 25: ${17 > 12 || 15 < 25}`);
console.log(`17 < 12 OR 15 > 25: ${17 < 12 || 15 > 25}`);
console.log(`!(199 > 10): ${!(199 > 10)}`);

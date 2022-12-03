console.log("\nQuato maneiras de declarar uma função ");

function produto(valor1, valor2) {
  return valor1 * valor2;
}
console.log("Produto: "+ produto(2,15));


const soma = function (valor1,valor2) {
  return valor1 + valor2;
}
console.log("Soma: " + soma(10,30));


let divisao = (valor1, valor2) => {
  return valor1/valor2;
}
console.log("Divisão: " + 10/4);

const subtracao = (value1,value2) => value1-value2;
console.log("Subtração: " + subtracao(40,19));

console.log("\nFunções sem return definido, retornam indefined");
function somar(value1, value2) {
    value1+ value2;
}
console.log(somar(10,15));

console.log("\nVariáveis definidas dentro da função não vazam para foda da função");
function areaRetangulo(a,b) {
  var area = a * b;
  return area;
}

console.log("Área do retangulo:" + areaRetangulo(8,5));
//console.log(area);

console.log("\nFunction hoinsting é um caracteríticas do interpretador javaScript que move as decarações de funções, variáveis e classes para o topo do escopo do algoritmo.");
imprimirNome("Rafael de Luca");
function imprimirNome(nome) {
    console.log("Seu nome é " + nome);
}

console.log("\nFunções para ser passadas como agumento de funções e até ser retornadas em funções")
function quadrado(valor) {
  return valor * valor;
}

function dobroDoQuadrado(funcao, valor) {
  let resultado = funcao(valor) * 2;
  console.log("O dobro do quadrado de " + valor + " é igual " + resultado);
}

dobroDoQuadrado(quadrado,3);
dobroDoQuadrado(quadrado,5);


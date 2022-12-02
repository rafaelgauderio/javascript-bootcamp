console.log("\nQuato maneiras de declarar uma função ");

function produto(valor1, valor2) {
  return valor1 * valor2;
}
console.log("Produto"+ produto(2,15));


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




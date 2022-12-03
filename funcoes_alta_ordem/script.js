console.log("\nFunções alta ordem");
console.log("São funções que recebem outras funções como argumento e retornam as funções alteradas.");

console.log("\nMap é uma função aplica uma função a cada elemento de uma coleção original e retornam uma nova coleção com os elementos alterados.");
let vetor1 = new Array(1,2,3,4,5,6);

console.log("vetor original: " + vetor1);

function quadrado (x) {
  return x * x;
}

function cubo(x) {
  return x ** 3;
}

// aqui no map não estou chamando a funcao apenas usando ela como argumento, por isso a ausência de parenteses
let map1 = vetor1.map(quadrado);
const map2 = vetor1.map(cubo);
var map3 = vetor1.map( x => x *x );
var map4 = vetor1.map( x => x **3 );

console.log(map1);
console.log(map2);
console.log(map3);
console.log(map4);
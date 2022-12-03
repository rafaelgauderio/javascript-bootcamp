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

console.log("\nFilter é uma função que retorna uma nova coleção apenas com os elementos que atenderem ao predicado.")
console.log("Predicado: é uma função que retorna true ou false")

function par (valor) {
  if(valor % 2 ==0) {
    return true;
  } else {
    return false;
  }
}

function impar(valor) {
  if(valor % 2 !=0) {
    return true;
  } else {
    return false;
  }
}

let filter1 = vetor1.filter(par);
let filter2 = vetor1.filter(impar);
const filter3 = vetor1.filter(x => x %2==0);
const filter4 = vetor1.filter(x => x %2!=0);
var filter5 = vetor1.filter(x => x < 0);

console.log(filter1);
console.log(filter2);
console.log(filter3);
console.log(filter4);
console.log(filter5);


console.log("\nReduce é uma função que aplica cumulativamente uma função aos elementos de uma coleção e retorna o resultado final acumulado.");
console.log("No caso de uma coleção vazia é necessário informar o valor inicial para acumualar")

 const vetor2 = [1, 2, 3, 4 ,5];
 const vetorvazio = [];

function somatorio(x,y) {
  return x + y;
}

function produtorio(a,b) {
  return a * b;
}

let reduce1 = vetor2.reduce(somatorio);
let reduce2 = vetor2.reduce(produtorio);
let reduce3 = vetor2.reduce(somatorio,0);
let reduce4 = vetor2.reduce(produtorio,1);
let reduce5 = vetorvazio.reduce(somatorio,0);

console.log("Vetor original: " + vetor2)
console.log(reduce1);
console.log(reduce2);
console.log(reduce3);
console.log(reduce4);
console.log(reduce5);


console.log("\nsort: ordena uma coleção conforme a função de comparação.");
console.log("sort altera a coleção original, então o ideal é criar um clone da coleção inicial se não quiser alterada");
console.log("comparação: resulta 0 se igual, positivo se o primeiro parametro é maior e negativo se primeiro parametro é menor.");

const vetor3 = ["Rafael", "Maria", "Clara", "Antonela", "Marcio", "Ziza", "Juvenal", "Bia"];

function comparacaoTamanho(string1, string2) {
  return string1.length - string2.length;
}

console.log("vetor original: " + vetor3);

//gerando clones da coleção para não alterar a original

const sort1 = [...vetor3].sort();
const sort2 = [...vetor3].sort(comparacaoTamanho);
const sort3 = [...vetor3].sort((a,b)=> a.length - b.length);

console.log("\nOrdem alfabética");
console.log(sort1);

console.log("Ordenando por tamanho");
console.log(sort2);

console.log("Ordenando por tamanho com arrow function");
console.log(sort3);

console.log("Alterando o vetor orignal")
console.log(vetor3.sort());
console.log(vetor3);


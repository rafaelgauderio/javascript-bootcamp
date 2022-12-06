console.log("\nREST: são os três pontinhos.")
console.log("Converte valores passandos por vírgula em um array");

function soma(...vetor) {
  let soma=0;
  for(let i=0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  return soma;
}

let resultado = soma(0, 1, 2, 3, 4, 5);
console.log("Soma dos valores convertidos para vetor: " + resultado);

function produto(...vetor) {
  let produtorio=1;
  for(let i=0; i < vetor.length; i++) {
    produtorio *= vetor[i];
  }
  return produtorio;
}

console.log("Produtório do vetor: " + produto(1,2,3,4,5));

let maximo = Math.max(2,7,15,99,5,14);
let minimo = Math.min(2,7,15,99,5,14);
console.log("Máximo: " + maximo);
console.log("Mínimo: " + minimo);

// SPREAD
console.log("\nSPREAD");
console.log("Faz a operação inversa do REST, 'espalha', converte um array em valores separados por vírgula");

let vetor = {
  nome: "Rafael de Luca",
  email: "deluca1712@gmail.com",
  profissao: "desenvolvedor java"
};
console.log(vetor);

console.log("O objeto abaixo não é uma cópia. É um referência de memória ao primeiro vetor")
const objeto = vetor;
console.log("Referência de memória ao vetor");
console.log(objeto);

const copiaVetor = {...vetor};
console.log("Cópia do vetor");
console.log(copiaVetor);

const copiaVetorPlus = {...vetor, idade:35, peso:75.5};
console.log("Adicionando parametros à cópia do vetor");
console.log(copiaVetorPlus);

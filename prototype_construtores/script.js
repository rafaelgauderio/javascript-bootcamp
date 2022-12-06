console.log("\nFunção construtora tem função de instanciar objetos com uma estrutura pré definida.");
console.log("Todos os objetos herdam prototype de Object");
console.log("Desde a versão ES6 do javascript a estrutura dos objetos também podem ser definidas por classe.");
console.log("Definir propriedades na função contrutora");
console.log("Definir métodos no prototype.")

const objeto = {
  descricao: "Tablet",
  preco: 1500.0,
  estoque: 15
}

const Produto = function(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;
}

let prod1 = new Produto("Celular Motorola", 950.0, 20);
let prod2 = new Produto("Teclado mecânico", 350.0, 10);

console.log(objeto);
console.log(prod1);
console.log(prod2);
console.log(prod1.hasOwnProperty("nome"));
console.log(prod1.hasOwnProperty("tamanho"));



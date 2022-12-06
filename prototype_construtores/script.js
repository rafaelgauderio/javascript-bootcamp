console.log("\nFunção construtora tem função de instanciar objetos com uma estrutura pré definida.");
console.log("Todos os objetos herdam prototype de Object");
console.log("Desde a versão ES6 do javascript a estrutura dos objetos também podem ser definidas por classe.");
console.log("Definir propriedades na função contrutora");
console.log("Definir métodos no prototype. Visto que funções são lógicas e não atributos,\nnão tem porque ficar repetindo as funções para cada objeto")

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

console.log("\nPrototype");
console.log("Mecanismo do javascript pelo qual objetos herdam recursos uns dos outros.");
console.log("Prototype de um construtor define uma estrutura de membros que são compartilhados pelas instâncias desse construtor.");

Produto.prototype.total = function () {
  return this.estoque * this.preco;
}

Produto.prototype.adicionar = function(quantia) {
   return this.estoque += quantia;
}

Produto.prototype.remover= function(quantia) {
  if(quantia <= this.estoque) {
    return this.estoque -= quantia;
  }
}

Produto.prototype.toString = function() {
  return "Dados do produto\nnome: " + 
     this.nome + ", preço: " + this.preco.toFixed(2) + ", quantidade: " + this.estoque;
}

console.log(prod2);
console.log(prod2.total());
console.log(prod2.adicionar(20));
console.log(prod2.remover(5));
console.log(prod2.toString());

const Product = function(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  this.toString = function() {
    return "Dados do produto (função interna)\nnome: " + 
    this.nome + ", preço: " + this.preco.toFixed(2) + ", quantidade: " + this.estoque;
  }
}

Product.prototype.toString = function() {
  return "Dados do produto\nnome: " + 
     this.nome + ", preço: " + this.preco.toFixed(2) + ", quantidade: " + this.estoque;
}

console.log("Tem priovidade chamar a função toString que está dentro do construtor.")
const p3 = new Product("Calça", 200.0, 15);
console.log(p3.toString());

console.log("\nChamando o to String dentro do prototype.")
console.log(Product.prototype.toString.call(p3));



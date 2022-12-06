
console.log("\nEm JavaScript classes são um 'SYNTATIC SUGAR' para funções construtoras");
console.log("Quer dizer que por debaixo dos panos a estrutura será baseada em prototypes");
console.log("Classes são apenas um forma mais amigável de codificar");

class Produto {
  constructor (nome,preco,quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

adicionar(quantia) {
  return this.quantidade+= quantia;
}

remover(quantia) {
  if (this.quantidade >= quantia)
  return this.quantidade+=quantia;
}

total() {
  return this.quantidade * this.preco;
}

imprimir() {
  return "Dados do produto\nDescrição: "  + this.nome + ", preco: " + this.preco.toFixed(2) +  ", quantidade: " + this.quantidade;
}

}

const prod1 = new Produto ("Gol bolinha", 25000.0,5);
const prod2 = new Produto("Opala",2500.0,2);
const prod3 = new Produto("Monza", 4000.0,10);

console.log(prod1);
console.log(prod2);
console.log(prod3);
console.log(prod1.adicionar(20));
console.log(prod2.remover(1));
console.log(prod3.total());
console.log(prod3.imprimir());
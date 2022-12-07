export default class Produto {

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
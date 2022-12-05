console.log("\nO novo objeto vai ser um referência a parte do objeto anterior.");

const objeto = {
  unidade: "filial_caxias",
  numero_pedido: 12233291,
  data: "2022-12-17",
  cliente: {
    id:45,
    nome: "Rafael de Luca",
    email: "deluca1712@gmail.com",
    cpf:"001.123.320-82",
    ativo: true
  },
  itens: [
    {
      descricao: "Televisão",
      preco: 1300.00,
      quantidade: 2
    },
    { 
      descricao: "Celular Sansung",
      preco: 1500.00,
      quantidade: 3
    },
    {
      descricao: "Capinha celular",
      preco: 100,
      quantidade: 2
    }

  ] 
};

// id e data fazem referência ao objeto
let {
  unidade, data, numero_pedido
} = objeto;

let {
  id, nome, email, cpf, ativo
} = objeto.cliente;

console.log(objeto);
console.log(unidade);
console.log(data);
console.log(numero_pedido);
console.log("\nDados do cliente");
console.log(id);
console.log(nome);
console.log(email);
console.log(cpf);
console.log(ativo);



console.log("\nDesestruturação como argumento de função.");

function subTotal (itens) {
  return itens.preco * itens.quantidade;
}

// faz a mesma coisa que a função de cima, apenas com o objeto desetruturado agora
function subTotal2 ({preco, quantidade}) {
  return preco* quantidade;
}
console.log("Multiplicando os preços pelas quantidades.")
console.log("R$ "+ subTotal(objeto.itens[0]));
console.log(subTotal2(objeto.itens[0]));
console.log("R$ "+ subTotal(objeto.itens[1]));
console.log(subTotal2(objeto.itens[1]));


console.log("\nFunção total");

function total({ itens}) {
  let soma =0;
  for (let i=0; i < itens.length; i++) {
    soma += subTotal(itens[i]);
  }
  return soma;
}

console.log(total(objeto));

var [item1_do_pedido, item2_do_pedido, item3] = objeto.itens;
console.log(item1_do_pedido);
console.log(item2_do_pedido);
console.log(item3)
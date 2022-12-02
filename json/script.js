console.log("Json\nJavascript Object Notation")
console.log("JSON é um padrão universar de representar dados na forma de texto")
console.log("https://www.json.org")

console.log("\nObjeto JavaScript");
const product = {
  name: "Phone Sansung",
  price: 3500.50,
  quantity: 20
}

const product02 = {
  "name": "Phone Sansung",
  "price": 3500.50,
  "quantity": 20
}

console.log(product);
console.log(product02);

// objeto se usa chaves e array se usa conlchetes

let objeto = {
  id:17,
  date: "2022-05-30",
  vetor_produtos: [
    { description: "Televisão", 
      price: 1900.50,
      quantity:10

    },
    {
      description: "Liquidificador",
      price: 150.50,
      quantity:20
    }
  ],
  user: {
    name: "Rafael de Luca",
    email: "rafael@gmail.com",
    disable: false
  },
  empresa: {
    razao_social: "Google Ltda",
    data_fundacao: "1995-12-30"
  }
}

console.log(objeto);

console.log("\nNavegando pelo objeto");
console.log(objeto.vetor_produtos[0]);
console.log(objeto.vetor_produtos[1].description);
console.log(objeto.user.name);
console.log(objeto.empresa.data_fundacao);

console.log("\nConvertendo de texto para JSON e vice-versa");
console.log("Objeto convertido para JSON (agora é um objeto estruturado).");
let string = `{"description": "Camiseta", "price":29.90, "size":"small"}`;

const objeto2 = JSON.parse(string);
console.log(objeto2);
console.log("Descrição: " + objeto2.description);
console.log("Preço: " + objeto2.price);
console.log("Tamanho:" + objeto2.size);

console.log("\nConvertendo de JSON para texto");
const string02 = JSON.stringify(objeto2);
//agora vai imprimir tudo como um texto só, sem ser um objeto estruturado
console.log(string02);


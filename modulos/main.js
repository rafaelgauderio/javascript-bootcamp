import * as apelido from './numeros.js';
//import {somatorio, produtorio, arredondar} from './numeros.js';
import Produto from './produto.js'; 

console.log("\nMódulos são nativos do JavaScript ES6+");
console.log("Servem para organizar o código em componentes/módulos menores");
console.log("Auxilia no encapsulamento do código");

console.log("Somente funções, objetos, valores exportados pode ser importados em outro módulo");
console.log("Exportações podem serm explícitas ou apenas padrão");
console.log("As exportações defaul podem receber um apelido");

console.log("\nMódulos são stric mode por padrão.");
console.log("As variáveis não vazam escopo global e as algumas ações sensíveis são proibidas.");
console.log("Essas proibições deixam o código mais seguro e menos exposto.");
console.log("Dentro do módulo o ponteiro this é undefined e não um referências para o objeto complexo windows.")



console.log("\nUsando as funções importadas");

let soma = apelido.somatorio(4,3);
console.log("Soma: "+ soma);

const produto = apelido.produtorio(5,20);
console.log("Produto: " + produto);

const exponencial = apelido.exponencial(9,2);
console.log("Exponencial: " + exponencial);

var arrendondar = apelido.arredondar(1.4595,2);
console.log("Arredondamento: " + arrendondar);

let x = apelido.arredondar(apelido.somatorio(5.738393,3.252829),2);
console.log(x);

console.log("\nImportando a classe produto");

const prod1 = new Produto("Mouse sem fio", 99.50, 10);
prod1.adicionar(25);
console.log(prod1.imprimir());

const prod2 = new Produto("Cadeira", 500.00, 5);
prod2.remover(1);
console.log("\nImprimindo como objeto estruturado")
console.log(prod2);

console.log("\nImprimindo como string");
console.log(prod2.imprimir());



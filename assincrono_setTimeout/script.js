console.log("\nsetTimeout");
console.log("É uma função que executa uma função após um dado tempo em milisegundos.");
console.log("Quando vai passar um função como argumento de função, nãos e usar os parenteses. Apenas uma referências para a função.");

function sayHello () {
  console.log("Hello");
}

function dizerBemVindo (nome) {
  console.log("Seja bem-vindo sr.(a) " + nome);
}

function dizerBomdia (nome) {
  console.log("Bom dia sr.(a) " + nome);
}
function dizerTchauPraTi (nome) {
  console.log("Tchau pra ti sr.(a) " + nome);
}

setTimeout(sayHello,2000); // após 2 segundos.

console.log("\nVários setTimeout encadeados sincronos em cadeia");
setTimeout(() => {
  dizerBemVindo("Rafael de Luca");
  setTimeout(() => {
    dizerBomdia("Juliana da Silva");
    setTimeout(() => {
      dizerTchauPraTi("Claudia de Souza");
  },3000);
},2000);
},3500);

console.log("\nVai executar antes esse print");
console.log("Pois a execução é assincrona e depois as funções com setTimeout");

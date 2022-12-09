console.log("\nsetTimeout Sincrono");
console.log("NÃO É RECOMENDADO usar de maneira sincrono, pois vai travar as aplicações.");
console.log("De maneira sincrono a aplicação fica parada até executar o que estiver em s")


function dizerBemVindo (nome) {
  console.log("Seja bem-vindo sr.(a) " + nome);
}

function dizerBomdia (nome) {
  console.log("Bom dia sr.(a) " + nome);
}
function dizerTchauPraTi (nome) {
  console.log(`Tchau pra ti sr.(a) ${nome}`);
}

function esperaSincrona (milisegundos) {
  const fim = Date.now() + milisegundos; 
  while (Date.now() < fim) {

  }
}

esperaSincrona(2000);
dizerBemVindo("João da Silva");
esperaSincrona(3000);
dizerBomdia("Cristina Vieira");
esperaSincrona(5000);
dizerTchauPraTi("Último usuário");

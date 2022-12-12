
console.log("Async / await\n");
console.log("Sintetic sugar de usar promise com execução assincrona");
console.log("Facilita a legibilidade do código");
console.log("Precisa ser encapsulado em uma função.");
console.log("Processamento assíncrono devolvo o processamento para a API, até dar o tempo necessário para executar a promisse.\n\n")

const cep = "90245000";

const fetchResultado = fetch(`https://viacep.com.br/ws/${cep}/json/`);

/*
fetchResultado.then(valor => {
  console.log(valor);
});
*/

async function getRespostaDoJson(url) {
      // await faz executar de maneira assincrona. espera chegar o resultado para executar a próxima linha de código.
      const resposta = await fetch(url);
      const corpoJson = await resposta.json();
      return corpoJson;
      //console.log(resultado);
}

//no caso abaixo iria retornar a promisse pendennte, pois estamos chamando um função assincrona dentro de uma sincrona (console.log)
//console.log(getRespostaDoJson(`https://viacep.com.br/ws/${cep}/json/`));

// resolvendo usando .then
getRespostaDoJson(`https://viacep.com.br/ws/${cep}/json/`)
  .then(resultado => {
    console.log(resultado);
  });

// usando função asincrona
// await só funciona dentro de uma função assincrona
async function imprimirCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await getRespostaDoJson(url);
    console.log(json);
}

imprimirCep(90560005);

console.log("Console.log é uma função sincrona");
console.log("Chamar uma função assincrona dentro de uma função sincrona, a função sincrona não vai esperar chegar a resposta para executar.")
console.log("Executa primeiro");
console.log("Executa por fim\n\n");
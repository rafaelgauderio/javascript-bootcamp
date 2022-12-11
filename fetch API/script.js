console.log("\nFetch API");
console.log("Disponibiliza uma função para acessar o corpo de uma resposta de um requisição.\n")


// cep do Humaita Porto Alegre
const cep = "90245000";

const fetchResultado = fetch(`https://viacep.com.br/ws/${cep}/json/`);

console.log("Resultado da fecth API");
console.log(fetchResultado);

fetchResultado
  .then((resposta) => {
    console.log("SUCESSO NO FETCH", resposta);
    // a intenção é imprimir apenas o body da resposta
    const json =resposta.json();
    json
      .then((resposta) => {
        console.log("SUCESSO NO JSON", resposta);
      })
      .catch((error) => {
        console.log("ERRO NO JSON", error);
      });
  })
  .catch((error) => {
    console.log("ERRO NO FECTH", error);
  });

console.log("Imprime antes da Promise ser resolvida.")
console.log("valor intermediário");
console.log("valor final\n\n");
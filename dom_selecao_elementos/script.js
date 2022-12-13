let primeiroLi = document.querySelector("li");

console.log(primeiroLi);

// imprime todo o html
console.log(primeiroLi.outerHTML);

// imprime apenas o que tem dentro da tag html
console.log(primeiroLi.innerHTML);

const primeiroUl = document.querySelector("ul");
console.log(primeiroUl);
console.log(primeiroUl.outerHTML);
console.log(primeiroUl.innerHTML);

const todoItens = document.querySelectorAll("li");
console.log("\nTodos os itens da lista");
console.log(todoItens);

console.log("\nImprimindo por seletor de classe");
let cartao = document.querySelector(".cartao");
console.log(cartao);

console.log("\nSelecionado elemento pelo nome da classe");
let cartaoPorClassName = document.getElementsByClassName("cartao");
console.log(cartaoPorClassName);

// acrescentando elemento dentro do div
const selecionarPorId = document.getElementById("ultimoCartao");
const textoNovo = document.createElement("h3");
textoNovo.innerHTML = "Texto adicionado";
selecionarPorId.appendChild(textoNovo);

cartao.classList.add("borda-verde");

let segundoCartao = document.querySelector(".cartao + .cartao");
segundoCartao.classList.add("borda-vermelha");

let terceiroCartao = document.querySelector("div + div + div");
terceiroCartao.classList.add("borda-violeta");

console.log("\nColeção NodeList não são arrays, mas são considerandos arrayLike");
console.log(cartaoPorClassName[3]);

console.log("\nConvertando para array");
Array.from(cartaoPorClassName).map(cadaItem => {
    console.log(cadaItem);
});








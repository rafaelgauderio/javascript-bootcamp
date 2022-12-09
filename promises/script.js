console.log("\nPROMISE");
console.log("É uma função construtora do javaScript");
console.log("Promises fazem mais sentido quando houver alguma execução ASSÍNCRONA na função f, uma execução que demore a resolver.");
console.log("Promises são muito uteins para fazer requisições, funções assincronas");


// função que resolve a promise
function f(g,h) {
    setTimeout(() => {
        if(20 > 17) {
            g("Valor P");
        } else {
            h("Valor Q");
        }  
    },5000);    
}

// função que rejeita a promise
function i(j,k) {
    if(0 > 17) {
        j("Valor P");
    } else {
        k("Valor Q");
    }
    
}


function executaSeFullfilled(valor) {
    console.log("\nResolveu a promisse com o valor: " + valor);
}

function executaSeRejected(valor) {
    console.log("Rejeitou a promisse com o valor: " + valor);
}

console.log("\nInstanciando a promise e chamando a função f");
let myPromise = new Promise(f); // fullfilled
let myPromise2 = new Promise(i); // rejected


myPromise.then(executaSeFullfilled);

// usando função lambda
//console.log("\nPara executar algo quando a prómisse for resolvida tem que chama o método then")
myPromise.then(valor =>  {
    console.log("Resolveu (usando função lambda) a promisse com o valor: " + valor);
})

//console.log("\nExecuntado um promise com catch após ela ser rejeitada");
myPromise2.catch(executaSeRejected);
myPromise2.catch( valor => {
    console.log("Rejeitou (usando função lambda) a promisse com o valor: " + valor);
})

//resolvendo
myPromise
    .then(valor => {
        console.log("Resolveu (then e catch encadeado) com valor: " + valor);
    })
    .catch(valor => {
        console.log("Rejeitou (then e catch encadeado) com valor: " + valor);
    })


console.log(myPromise);
console.log(myPromise2);
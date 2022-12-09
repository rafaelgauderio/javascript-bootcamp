console.log("\nPROMISE");
console.log("É uma função construtora do javaScript");
console.log("Promises fazem mais sentido quando houver alguma execução ASSÍNCRONA na função f, uma execução que demore a resolver.");
console.log("Promises são muito uteins para fazer requisições, funções assincronas");
console.log("Promise recebem um função f como argumento e f recebe duas funções g e h como argumento");
console.log("Se durante a execução da lógica da função f a função g for chamada com o argumento P, então o estado da promisse mudara para FULFILLED (resolvida) e com resultado valor P da promisse");
console.log("Se durante a execução da lógica da função f a função h for chamada com o argumento Q, então o estado da promisse mudara para REJECTED (rejeitada) e com resultado valor Q da promisse");
console.log("O método THEN de uma promise recebe como argumento uma função e quando a promise for RESOLVIDA, executa esta função passando o valor P para ela");
console.log("O método CATCH de uma promise recebe como argumento uma função e quando a promise for REJEITADA, executa esta função passando o valor Q para ela");

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
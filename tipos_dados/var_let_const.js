console.log("Imprimindo var , let e const");

/* var, let, const
* var = não é mais recomendado o uso, pois vaza o escopo em estutura de contrato
* let = usar quando realmente houver necessidade de alterar a variável
* const = mais usado para variáveis constantes
* É uma boa pratica de programação criar const sempre que possível
*/

const x = 17;

if (x > 15) {
    
    var z = 99;
    let y = 17.12;
    const w = true;
    console.log("Imprimindo dentro do laço if: ")
    console.log(z);
    console.log(y);
    console.log(w);    
}

    console.log("Imprimindo fora do laço if: ");
    console.log("Vai vazar para fora do escoto a variável do tipo var.")
    console.log(z)

    for(let i=0; i <= 20 ; i++) {
        console.log("Imrpimindo valor de i: " + i);
    }



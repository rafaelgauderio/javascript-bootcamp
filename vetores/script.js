const  fruits =  ["Ameixa", "Banana", "Laranja", "Morango"];
console.log(fruits);
console.log("Tamanho: " + fruits.length);


const heterogeneo = ["Rafael", 17, true, 89.5];
console.log(heterogeneo);

console.log("\npop remove o ultimo elemento do array e retorna esse elemento");
let removerPop = fruits.pop();
console.log(removerPop); 


console.log("\nshift remove o primeiro elemento do array e retorna esse elemento");
let removerShift = fruits.shift();
console.log(removerShift);

console.log("\nsplice remove elementos a partir de um elemento e insere elementos também nessa posição");
fruits.splice(2,1,"Uva","Melância","Melão","Tomate");

console.log("\nArray final após as remoções e inserções");
console.log(fruits);

// inserindo
console.log("\npush insere no final do array");
fruits.push("Jabuticaba");

console.log("unshift insere no início do array");
fruits.unshift("Limão");

console.log("splice para inserir elementos sem remover ninguém, informar o segundo parâmetro com zero");
fruits.splice(1,0,"Bergamota");

console.log("\nImrpimindo após as inserções");
console.log(fruits);

console.log("\nAcessando elementos pelo índice");
const nomes = ["Rafael", "Luciana", "Janaina"];
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
nomes[3]="Larissa";
console.log(nomes[3]);

console.log("\nConcatenando 2 arrays");
let peixes = ["Lambari", "Dourado"];
let mamiferos = ["Balaia", "Morcego"];
let animais = peixes.concat(mamiferos);
console.log(animais);

console.log("\nImprimindo elementos do array com for:");
for(let i=0; i < fruits.length ; i++) {
  console.log("Fruta: " + fruits[i]);
}

console.log("\nImprimindo array com laço forEach");
fruits.forEach( argumento => {
  console.log(`Fruta:  ${argumento}`);
});


console.log("\nManeiras diferentes de instanciar arrays");
let tamanho = 10;
const usuarios = new Array(tamanho);
for(let i=0; i < tamanho ; i++) {
  usuarios[i] ={
    Id:i+1, nome: `Usuario ${i+1}`
  }
}
console.log(usuarios);

console.log("\nVetor de valor constantes")
const vetor = new Array(12).fill('value');
console.log(vetor);

for(i=0 ; i< vetor.length; i++) {
  console.log(vetor[i]);
}

console.log("\nUsando map");
const pessoas = new Array(5).fill(null).map(() =>({nome: "Usuario"})
);
pessoas[1].nome= "Usuario diferente";
console.log(pessoas);

console.log("\nUsando Object.Keys")
let numeros = Object.keys(new Array(5).fill(null));
console.log(numeros);

let numeros2 = Object.keys(new Array(10).fill(null).map(Number));
console.log(numeros2);
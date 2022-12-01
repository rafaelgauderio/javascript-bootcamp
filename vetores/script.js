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




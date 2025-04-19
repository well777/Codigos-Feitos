// Criando um array de frutas
let frutas = ["Maçã", "Banana", "Laranja"];

// Acessando elementos
console.log("Primeira fruta:", frutas[0]); // Maçã

// Adicionando elementos
frutas.push("Abacaxi");
console.log("Depois de adicionar Abacaxi:", frutas);

// Removendo o último elemento
frutas.pop();
console.log("Depois de remover o último:", frutas);

// Removendo o primeiro elemento
frutas.shift();
console.log("Depois de remover o primeiro:", frutas);

// Adicionando no início
frutas.unshift("Melancia");
console.log("Depois de adicionar no início:", frutas);

// Percorrendo o array com for
console.log("Percorrendo com for:");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Percorrendo com forEach
console.log("Percorrendo com forEach:");
frutas.forEach(function(fruta, index) {
  console.log(index + ": " + fruta);
});

// Verificando se um item está no array
if (frutas.includes("Banana")) {
  console.log("Tem Banana!");
} else {
  console.log("Não tem Banana.");
}

let listaDeCompras = new Array(50).fill(null); // todas as posições começam como null

function adicionarItem(item, posicao) {
  if (posicao >= 0 && posicao < 50) {
    listaDeCompras[posicao] = item;
    console.log(`Item "${item}" adicionado na posição ${posicao}.`);
  } else {
    console.log("Posição inválida. Use uma posição entre 0 e 49.");
  }
}

// Função para exibir a lista de compras
function exibirLista() {
  console.log("Lista de Compras:");
  listaDeCompras.forEach((item, index) => {
    console.log(`${index}: ${item !== null ? item : "[vazio]"}`);
  });
}

// Exemplo de uso
adicionarItem("Arroz", 0);
adicionarItem("Feijão", 1);
adicionarItem("Macarrão", 2);

exibirLista();

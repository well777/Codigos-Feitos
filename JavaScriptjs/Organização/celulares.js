const celulares = [
    { id: 1, nome: "iPhone 14", preco: 5999 },
    { id: 2, nome: "Samsung Galaxy S23", preco: 4999 },
    { id: 3, nome: "Motorola Edge 30", preco: 2999 }
  ];
  
  let mensagem = "Bem-vindo à Loja de Celulares!\n\n";
  mensagem += "Escolha um celular para comprar:\n";
  
  celulares.forEach(celular => {
    mensagem += `${celular.id} - ${celular.nome} (R$ ${celular.preco})\n`;
  });
  
  const escolha = prompt(mensagem);
  const celularSelecionado = celulares.find(c => c.id === parseInt(escolha));
  
  if (celularSelecionado) {
    alert(`Você escolheu: ${celularSelecionado.nome}\nPreço: R$ ${celularSelecionado.preco}\n\nCompra realizada com sucesso!`);
  } else {
    alert("Opção inválida. Tente novamente.");
  }
  
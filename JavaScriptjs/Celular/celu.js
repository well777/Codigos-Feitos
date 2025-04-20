const vendas = [
    {
      cliente: "Ana",
      modelo: "iPhone 14",
      preco: 6999,
      data: "2025-04-19"
    },
    {
      cliente: "Carlos",
      modelo: "Galaxy S22",
      preco: 3799,
      data: "2025-04-18"
    }
  ];
  
  vendas.forEach(v => {
    console.log(`${v.cliente} comprou um ${v.modelo} por R$${v.preco}`);
  });
  
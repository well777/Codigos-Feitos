const axios = require('axios');
const prompt = require('prompt-sync')();
const fs = require('fs');

const caminhoArquivo = 'vendas.json';

let vendas = [];
if (fs.existsSync(caminhoArquivo)) {
  const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
  vendas = JSON.parse(dados);
}

async function buscarInfoCelular(modelo) {
  try {
    const response = await axios.get(`https://api-mobilespecs.azharimm.dev/v2/search?query=${encodeURIComponent(modelo)}`);
    const celular = response.data.data.phones[0];

    if (celular) {
      return celular;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar informações do celular:", error.message);
    return null;
  }
}

async function registrarVenda() {
  const nomeCliente = prompt("Nome do cliente: ");
  const tipoCelular = prompt("Tipo do celular (Ex: smartphone, flip): ");
  const modeloCelular = prompt("Modelo do celular: ");
  const preco = prompt("Preço (R$): ");

  const infoCelular = await buscarInfoCelular(modeloCelular);

  const novaVenda = {
    cliente: nomeCliente,
    tipo: tipoCelular,
    modelo: modeloCelular,
    preco: parseFloat(preco),
    infoExtra: infoCelular ? {
      nome: infoCelular.phone_name,
      marca: infoCelular.brand,
      linkDetalhes: infoCelular.detail,
      imagem: infoCelular.image
    } : null,
    data: new Date().toISOString()
  };

  vendas.push(novaVenda);
  fs.writeFileSync(caminhoArquivo, JSON.stringify(vendas, null, 2), 'utf-8');

  console.log("\n✅ Venda registrada com sucesso!");
}
function listarVendas() {
  console.log("\n📋 Lista de Vendas:");
  if (vendas.length === 0) {
    console.log("Nenhuma venda registrada ainda.");
    return;
  }

  vendas.forEach((venda, index) => {
    console.log(`\nVenda #${index + 1}`);
    console.log(`Cliente: ${venda.cliente}`);
    console.log(`Tipo: ${venda.tipo}`);
    console.log(`Modelo: ${venda.modelo}`);
    console.log(`Preço: R$ ${venda.preco}`);
    console.log(`Data: ${new Date(venda.data).toLocaleString()}`);
    if (venda.infoExtra) {
      console.log(`Info Adicional: ${venda.infoExtra.nome} - ${venda.infoExtra.marca}`);
      console.log(`Detalhes: ${venda.infoExtra.linkDetalhes}`);
    }
  });
}

async function menu() {
  let opcao = '';

  do {
    console.log("\n====== MENU DE VENDAS ======");
    console.log("1. Registrar nova venda");
    console.log("2. Listar vendas");
    console.log("0. Sair");
    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
      case '1':
        await registrarVenda();
        break;
      case '2':
        listarVendas();
        break;
      case '0':
        console.log("👋 Encerrando o programa.");
        break;
      default:
        console.log("❌ Opção inválida.");
    }
  } while (opcao !== '0');
}


menu();

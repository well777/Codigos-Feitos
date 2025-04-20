// Objeto de Cartão de Crédito
const cartaoDeCredito = {
    numero: "1234 5678 9012 3456",
    titular: "Wellington Silva",
    validade: "04/30",
    limite: 3000,
    saldoDisponivel: 3000,
    faturaAtual: 0,
  
    // Exibe os dados do cartão
    exibirCartao() {
      console.log(`Titular: ${this.titular}`);
      console.log(`Número: ${this.numero}`);
      console.log(`Validade: ${this.validade}`);
      console.log(`Limite total: R$ ${this.limite.toFixed(2)}`);
      console.log(`Saldo disponível: R$ ${this.saldoDisponivel.toFixed(2)}`);
      console.log(`Fatura atual: R$ ${this.faturaAtual.toFixed(2)}`);
    },
  
    // Realiza uma compra
    fazerCompra(valor) {
      if (valor <= this.saldoDisponivel) {
        this.saldoDisponivel -= valor;
        this.faturaAtual += valor;
        console.log(`Compra de R$ ${valor.toFixed(2)} realizada com sucesso!`);
      } else {
        console.log("Compra negada. Saldo insuficiente.");
      }
    },
  
    // Paga a fatura
    pagarFatura(valor) {
      if (valor > 0) {
        this.saldoDisponivel += valor;
        if (this.saldoDisponivel > this.limite) {
          this.saldoDisponivel = this.limite;
        }
        this.faturaAtual -= valor;
        if (this.faturaAtual < 0) {
          this.faturaAtual = 0;
        }
        console.log(`Pagamento de R$ ${valor.toFixed(2)} realizado com sucesso!`);
      } else {
        console.log("Valor inválido para pagamento.");
      }
    }
  };
  
  // Exemplo de uso
  cartaoDeCredito.exibirCartao();
  cartaoDeCredito.fazerCompra(500);
  cartaoDeCredito.fazerCompra(2800); // deve negar
  cartaoDeCredito.pagarFatura(200);
  cartaoDeCredito.exibirCartao();
  
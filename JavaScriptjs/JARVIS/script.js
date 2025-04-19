function processarComando(comando) {
  // Normaliza o comando: converte para minúsculas, remove acentos e espaços extras
  comando = comando
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

  // Itera sobre as chaves dos comandos definidos
  for (let chave in comandos) {
    // Normaliza a chave para comparação
    const chaveNormalizada = chave
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

    // Verifica se o comando começa com a chave normalizada
    if (comando.startsWith(chaveNormalizada)) {
      const acao = comandos[chave];
      const parametro = comando.slice(chaveNormalizada.length).trim();
      const resposta = typeof acao === 'function' ? acao(parametro) : acao;
      falar(resposta);
      return;
    }
  }

  // Se nenhum comando corresponder, responde com mensagem padrão
  falar('Desculpe, não entendi o comando.');
}
 
function processarComando(comando) {
    // Normaliza o comando: converte para minúsculas, remove acentos e espaços extras
    comando = comando
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  
    // Itera sobre as chaves dos comandos definidos
    for (let chave in comandos) {
      // Normaliza a chave para comparação
      const chaveNormalizada = chave
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
  
      // Verifica se o comando começa com a chave normalizada
      if (comando.startsWith(chaveNormalizada)) {
        const acao = comandos[chave];
        const parametro = comando.slice(chaveNormalizada.length).trim();
        const resposta = typeof acao === 'function' ? acao(parametro) : acao;
        falar(resposta);
        return;
      }
    }
  
    // Se nenhum comando corresponder, responde com mensagem padrão
    falar('Desculpe, não entendi o comando.');
  }
  function processarComando(comando) {
    // Normaliza o comando: converte para minúsculas, remove acentos e espaços extras
    comando = comando
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  
    // Itera sobre as chaves dos comandos definidos
    for (let chave in comandos) {
      // Normaliza a chave para comparação
      const chaveNormalizada = chave
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
  
      // Verifica se o comando começa com a chave normalizada
      if (comando.startsWith(chaveNormalizada)) {
        const acao = comandos[chave];
        const parametro = comando.slice(chaveNormalizada.length).trim();
        const resposta = typeof acao === 'function' ? acao(parametro) : acao;
        falar(resposta);
        return;
      }
    }
  
    // Se nenhum comando corresponder, responde com mensagem padrão
    falar('Desculpe, não entendi o comando.');
  }
  function processarComando(comando) {
    // Normaliza o comando: converte para minúsculas, remove acentos e espaços extras
    comando = comando
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  
    // Itera sobre as chaves dos comandos definidos
    for (let chave in comandos) {
      // Normaliza a chave para comparação
      const chaveNormalizada = chave
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
  
      // Verifica se o comando começa com a chave normalizada
      if (comando.startsWith(chaveNormalizada)) {
        const acao = comandos[chave];
        const parametro = comando.slice(chaveNormalizada.length).trim();
        const resposta = typeof acao === 'function' ? acao(parametro) : acao;
        falar(resposta);
        return;
      }
    }
  
    // Se nenhum comando corresponder, responde com mensagem padrão
    falar('Desculpe, não entendi o comando.');
  }
  function processarComando(comando) {
    // Normaliza o comando: converte para minúsculas, remove acentos e espaços extras
    comando = comando
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  
    // Itera sobre as chaves dos comandos definidos
    for (let chave in comandos) {
      // Normaliza a chave para comparação
      const chaveNormalizada = chave
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
  
      // Verifica se o comando começa com a chave normalizada
      if (comando.startsWith(chaveNormalizada)) {
        const acao = comandos[chave];
        const parametro = comando.slice(chaveNormalizada.length).trim();
        const resposta = typeof acao === 'function' ? acao(parametro) : acao;
        falar(resposta);
        return;
      }
    }
  
    // Se nenhum comando corresponder, responde com mensagem padrão
    falar('Desculpe, não entendi o comando.');
  }
  function processarComando(comando) {
    // Normaliza o comando: converte para minúsculas, remove acentos e espaços extras
    comando = comando
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  
    // Itera sobre as chaves dos comandos definidos
    for (let chave in comandos) {
      // Normaliza a chave para comparação
      const chaveNormalizada = chave
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
  
      // Verifica se o comando começa com a chave normalizada
      if (comando.startsWith(chaveNormalizada)) {
        const acao = comandos[chave];
        const parametro = comando.slice(chaveNormalizada.length).trim();
        const resposta = typeof acao === 'function' ? acao(parametro) : acao;
        falar(resposta);
        return;
      }
    }
  
    // Se nenhum comando corresponder, responde com mensagem padrão
    falar('Desculpe, não entendi o comando.');
  }
  
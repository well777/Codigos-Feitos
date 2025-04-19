function limitaPosicao (posicao) 
{
    if (posicao > 100 || posicao < 0)
    {
        console.log("Esta posição é INVÁLIDA!!!");
        
        var valorCorrigido = posicao % 100;
        if (valorCorrigido < 0)
        {
            valorCorrigido += 100
        } 
        console.log("Sua posição corrigida é:");
        return valorCorrigido;
    }else
    {
        console.log("POSIÇÃO VÁLIDA!!!");
        console.log("Posição: ",posicao);
    }

}


console.log(limitaPosicao(0));  // Esperado: 0
console.log(limitaPosicao(100));  // Esperado: 100
console.log(limitaPosicao(198));  // Esperado: 98
console.log(limitaPosicao(-148));  // Esperado: 52
console.log(limitaPosicao(62));  // Esperado: 62
console.log(limitaPosicao(665));  // esperado: 65
console.log(limitaPosicao(-1));  // esperado: 99
console.log(limitaPosicao(-354));  // esperado: 46
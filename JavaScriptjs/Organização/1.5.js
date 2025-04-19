var num1 = parseFloat(prompt("Digite um número: "));
var num2 = parseFloat(prompt("Digite mais um número: "));

soma = num1 + num2;
numLimite = 100;

if (soma > numLimite) 
{
    alert(`A soma dos dois numeros é: ${soma}`);
    console.log("Números somados:", num1, num2);
    console.log("Resultado:",soma);
}
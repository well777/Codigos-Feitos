var tempFahr = parseFloat(prompt("Digite a temperatura em graus Fahrenheit: "));

var fahrenheitToCelcius = ((tempFahr - 32) * 5 ) / 9;

alert(`A temperatura de ${tempFahr}°F convertida para Celcius é de ${fahrenheitToCelcius.toFixed(2)}°C.`)
console.log(fahrenheitToCelcius)s
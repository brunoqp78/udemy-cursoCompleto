
// em javaScript divisão por 0 é infinito
console.log(7/0)

// por ser fracamente tipado, ele converte o 10 para number e faz a divisão
console.log('10'/2)

// se não for possível converter ele retorna NaN
console.log('Show'*2)

// questão de precisão de números.
// o JS não arredonda = 0.79999999999999
// baseado na especificação da IEEE, a maioria segue
console.log(0.1 +0.7)

// faz um cast () e depois usou a toFixed para definir a casas decimais
console.log((10.345).toFixed(2))

// não pode, precisa fazer o cast
//console.log(10.toString())
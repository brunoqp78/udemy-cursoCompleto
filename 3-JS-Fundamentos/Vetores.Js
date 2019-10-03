console.log('vetores')
const valores = [3.4,4.6,5.8,9.8]
console.log(valores[0], valores[3])

//não trava, retorna undefined
console.log(valores[4])

//insere dinamicamente
valores[4] = 10
console.log(valores)

//insere dinamicamente e deixa espaço em branco,
valores[10] = 10
console.log(valores)

//código igual ao Java
console.log(valores.length)

//função para inserir no fim
valores.push(76)

//remove e retorna o último elemento do vetor
console.log(valores.pop())

//remover um determinado elemento
delete valores [0]

// ele apaga a posição, mas não modifica o tamanho. deixa vazio

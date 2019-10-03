// em objetos, a gente copia a referencia. ou seja, se mudar um muda o outro
// em objetos utiliza const
const a = {nome: 'bruno'}
console.log(a)
const b = a
b.nome = 'jose'
console.log(b)

// em tipos primitivos, é passagem de valor
let c = 10
let d = c
d++
console.log(c,d)

//aula dele
let valor
// o valor é undefined pois não foi definido
console.log(valor)

//não declarou, dá erro
//console.log(valor2)

// definimos ela, ou seja, não é undefined. agora é nulo
valor = null // ausẽncia de valor

//null, a variável já foi definida, se não for é undefined
//não inicialize com undefined, utilize sempre o null

//como é nulo, não é texto e não pode usar funções de string
//console.log(valor.toString()) // erro

const produto = {}
// como produto esta definido, o preco não esta
console.log(produto.preco) // funciona e retorna undefined
console.log(produto)

// agora definimos algo para preco
produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evite sempre usar undefined
// a gente não apagou
console.log(!!produto.preco)
console.log(produto)

//apagar utilize
delete produto.preco
console.log(produto)

produto.preco = null // criamos novamente com o valor nulo, sem preço
console.log(!!produto.preco)
console.log(produto)

//se a variavel é null, não acesse nada dela, pois é nulo, vazio
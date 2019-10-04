// operador de desestruturação
// remover de um objeto um atributo
// remover de um vetor um elemento

// novo recurso do ES2015

const pessoa={
    nome : 'Ana',
    idade: 5,
    endereco:{
        rua: 'Angra dos reis',
        numero: 1000
    }
}

// chave representa o destructor
const {nome, idade} = pessoa
// forma de retirar diversos atributos/dados de uma estrutura
console.log(nome, idade)

// é possível renomear o atributo
const {nome: n, idade: i} = pessoa
console.log(n, i)

// se não existir é undefined ou o valor padrão(exemplo do true)
const { sobrenome, bemhumorada=true} = pessoa

console.log(sobrenome, bemhumorada)

// acessar um objeto interno
const{endereco:{rua, numero, cep}}=pessoa
console.log(rua, numero, cep)

// um objeto interno, obrigatoriamente precisa existir
const { conta: {ag, num}}=pessoa
//console.log(ag, num)

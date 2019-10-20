// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'Generico'
produto.preco = 220

console.log(produto)

//apagar atributos
delete produto.preco
delete produto['marca']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 80000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            rua: 'Abc',
            numero: 123
        }
    },
    condutores: [
        {nome: 'Junior',idade: 19},
        {nome: 'Ana', idade: 42}    
    ],
    calcularValorSeguro: function(){
        //codigo
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['rua']='Angra'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length) //já tinha apagado, não pode acessar funções ligadas a objetos


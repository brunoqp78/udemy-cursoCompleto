// usando definições similares a O.O
class Produto{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
    
    imprimir(){
        return `${this.nome} - ${this.preco}`
    }


}

const P1 = new Produto('Skol',3)
console.log(P1.imprimir())
console.log(P1.nome) // posso acessar o atributo interno

// usando funções construtoras de classes
function Produto2(nome, preco){
    this.nome = nome
    this.preco = preco
    this.imprimir=function(){
        return `${this.nome} - ${this.preco}`
    }
}

const P2 = new Produto2('Skol',3)
console.log(P2.imprimir())
console.log(P2.nome) // posso acessar o atributo interno

// usando funções construtoras de classes e arrowFunction
const Pessoa3 = (nome, preco) =>{
    return{
        //nome : nome,
        imprimir: ()=>{
            return `${nome} - ${preco}`
        },
        getNome: ()=>{
            return nome.toUpperCase()
        }
    }

}

const P3 = Pessoa3('Skol', 3)
console.log(P3.imprimir())
//console.log(P3.nome) // não posso acessar o atributo interno. para funcionar é necessário definir a linha 35.
console.log(P3.getNome()) // não posso acessar o atributo interno. ideal criar a funcao get.
console.log(typeof console)

//acessa a parte interna da função ou objeto
console.log(Math.ceil(6.2))

const objeto={}
objeto.nome = 'bruno'
objeto['numero'] = 1
console.log(objeto.nome)

function Objeto(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Executando...')
    }
}

const objeto2 = new Objeto('cadeira')
const objeto3 = new Objeto('mesa')

console.log(objeto2.nome)
console.log(objeto3.nome)
objeto2.exec()
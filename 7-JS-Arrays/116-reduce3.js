// implementar nossa versão do reduce
//minha solução
Array.prototype.reduce2 = function(callback){
    let r = this[0]
    for(let i=1;i<this.length;i++){
        r = callback(r,this[i])
    }
    return r
}

Array.prototype.reduce2Completo = function(callback, inicio){
    const indiceInicial = inicio ? 0 : 1
    let r = this[indiceInicial]

    for(let i=1;i<this.length;i++){
        r = callback(r,this[i])
    }
    return r
}


//solução professor
Array.prototype.reduce3 = function(callback){
    let acumulador = this[0]
    for(let i=1;i<this.length;i++){
        acumulador = callback(acumulador,this[i], i, this)
    }
    return acumulador
}


const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: true},
    { nome: 'Maria', nota: 9.2, bolsista: false},
    { nome: 'Pedro', nota: 9.8, bolsista: true},
    { nome: 'Ana', nota: 8.7, bolsista: false},

]

console.log(alunos.map(a=>a.bolsista))
const todosbolsistas = (resultado, bolsista) => resultado && bolsista
const r = alunos.map(a=>a.bolsista).reduce2(todosbolsistas)
console.log(r)


const algumbolsistas = (resultado, bolsista) => resultado || bolsista
const r1 = alunos.map(a=>a.bolsista).reduce2(algumbolsistas)
console.log(r1)

const r2 = alunos.map(a=>a.bolsista).reduce3(todosbolsistas)
console.log(r2)

const r3 = alunos.map(a=>a.bolsista).reduce3(algumbolsistas)
console.log(r3)

const r4 = alunos.map(a=>a.bolsista).reduce2Completo(todosbolsistas, true)
console.log(r2)

const r5 = alunos.map(a=>a.bolsista).reduce2Completo(algumbolsistas, false)
console.log(r3)

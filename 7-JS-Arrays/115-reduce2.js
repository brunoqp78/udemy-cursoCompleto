// usar reduce


const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: true},
    { nome: 'Maria', nota: 9.2, bolsista: false},
    { nome: 'Pedro', nota: 9.8, bolsista: true},
    { nome: 'Ana', nota: 8.7, bolsista: false},

]

console.log(alunos.map(a=>a.bolsista))


// retornar se todos os alunos são bolsista
// outra retornar se algum aluno é bolsista

//minhas soluções
//mapeamos o vetor de objetos para um vetor de notas
const r = alunos.map(a=>a.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual
},true)

console.log(r)


//usamos o reduce, que recebe primeiro uma função com dois parametros, o acumulador e o atual. O acumulador controla o valor total e o outro indica o atual
const r1 = alunos.map(a=>a.bolsista).reduce(function(acumulador, atual){
    return acumulador || atual
},false)

console.log(r1)

//solucoes professor
const todosbolsistas = (resultado, bolsista) => resultado && bolsista
const r2 = alunos.map(a=>a.bolsista).reduce(todosbolsistas)

console.log(r2)


//usamos o reduce, que recebe primeiro uma função com dois parametros, o acumulador e o atual. O acumulador controla o valor total e o outro indica o atual
const algumbolsistas = (resultado, bolsista) => resultado || bolsista
const r3 = alunos.map(a=>a.bolsista).reduce(algumbolsistas)

console.log(r3)


// transformar o array em um objeto ou string ou etc

const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
]
console.log(alunos.map(a=>a.nota))
//mapeamos o vetor de objetos para um vetor de notas
//usamos o reduce, que recebe primeiro uma função com dois parametros, o acumulador e o atual. O acumulador controla o valor total e o outro indica o atual
const r = alunos.map(a=>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador+atual
})

console.log(r)

//reduce tem um segundo valor que pode inicializar o acumulador com  um valor diferente de 0
const r1 = alunos.map(a=>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador+atual
},10)

console.log(r1)
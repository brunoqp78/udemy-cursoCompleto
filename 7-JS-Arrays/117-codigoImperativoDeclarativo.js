const alunos = [
    { nome: 'Joao', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

//imperativo : mais simples
let total1=0
for (let i=0;i<alunos.length;i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//declarativo : mais reuso
//menos como e mais oque
const getNota = aluno =>aluno.nota
const soma = (total,atual) => total+atual
// leitura facil = total é o mapeamento pegando as notas e reduzindo para a soma delas
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)

// sql é declarativo
// select codigo, nome from clientes where ativo = 1


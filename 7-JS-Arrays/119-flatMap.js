const escola = [{
    nome: 'Turma ML',
    alunos: [{
        nome: 'Gustavo',
        nota:8.1
    },{
        nome: 'Ana',
        nota:9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota:8.6
    },{
        nome: 'Roberto',
        nota:9.1
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const nota1 = escola.map(getNotasDaTurma)

console.log(nota1)

// a função flatMap irá unir as linhas de uma matriz, produzindo um vetor
Array.prototype.flatMap = function(callback){
    // a função de callback(que retorna um vetor de notas) é chamado para concatenar []
    return Array.prototype.concat.apply([], this.map(callback))
}

// a função de callback utilizada é aquela que retorna as notas de uma turma
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
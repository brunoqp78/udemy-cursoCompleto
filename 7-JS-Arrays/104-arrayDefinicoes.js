// Array é um objeto, lembrando que um objeto é uma função
console.log(typeof Array, typeof new Array, typeof [])

// Evite fazer vetores que tenham vários tipos de dados diferentes

// forma não muito utilizada para iniciar um vetor
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// forma mais utilizada para criar vetores
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)

// JS não dá erro se indicar uma posição inexistente.
console.log(aprovados[3]) // undefined
aprovados[3] = 'Paulo'
console.log(aprovados[3]) // Paulo

// outra forma de adicionar
aprovados.push('Abia')
console.log(aprovados)

// podemos inserir em qualquer lugar
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8]===undefined)
console.log(aprovados)

// ordenar o vetor
aprovados.sort()
console.log(aprovados) //ordenados por nome
// modificou o original

// apagar o elemento da posição 1
delete aprovados[1] // colocou o undefined
console.log(aprovados)
// não reordena
aprovados.sort()
console.log(aprovados) //ordenados por nome

//excluir vários elementos
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,2) // excluiu Carlos e ana
console.log(aprovados)

aprovados.splice(1,0, 'bruno', 'raquel') // excluiu nenhum após a posicao 1 e inseriu dois
console.log(aprovados)

aprovados.splice(0,2, 'novo') // apaga dois após o 0 e insere um novo
console.log(aprovados)

// O splice é uma função coringa, faz exclusão e inclusão de elementos no vetor. O primeiro parametro indica a posição que será considerada(incluir e/ou excluir), o 2° parametro indica quantos excluir, os demais são os elementos a incluir.






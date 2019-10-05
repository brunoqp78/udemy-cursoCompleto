const notas = [5,4,5.5,7.7,8,3,8.8]

for (let i in notas){
    console.log(`notas[${[i]}] = ${notas[i]}`)
}

const pessoa = {
    nome:'ana',
    sobrenome:'silva',
    idade:29,
    peso:64
}

//interessante para Objetos
for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
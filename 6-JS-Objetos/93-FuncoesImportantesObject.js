const pessoa={
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
//imprime o nome dos atributos
console.log(Object.keys(pessoa))

//imprimir os valores
console.log(Object.values(pessoa))

//imprimir os dois
console.log(Object.entries(pessoa))

//desestruturar,quebrar as propriedades
//percorrer as propriedades do objeto
Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}: ${valor}`)
})

//definir propriedade de atributos
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '01/01/2019' // funciona como o freeze para um atributo apenas
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa))//não imprime a data pois foi setada com false no enumerable

Object.assing //JS2015
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a: 4}
const obj = Object.assign(dest, o1, o2)// concatena os atributos de o1 e o2 em dest
console.log(obj) // a foi sobrescrito, o ultimo valor é dos ultimos objetos

//congela e não permite modificar
Object.freeze(obj)
obj.c = 23
console.log(obj)

//algumas das diversas funções importantes da classe/função objeto
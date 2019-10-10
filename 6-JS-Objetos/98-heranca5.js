console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//criar um novo metodo/função na classe/funcao String
String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

//usando a função
console.log('Escola Codigo'.reverse())

Array.prototype.first = function(){
    return this[0]
}

const x = [1,2,3,4]
console.log(x.first())

console.log(['a','b','c'].first())

//não faça, podemos modificar os comportamentos de funções já existentes como o toString da String
//String.prototype.toString = function (){
//    return 'Fudeu'
//}

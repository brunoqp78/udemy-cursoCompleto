// declara local, no node, dentro do modulo
let a = 3

// declara global, 
global.b = 123
var variavel = 3

// declara global, module.exports
this.c = 34
this.d = false
this.e = 'eu'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca: sem var ou let!!!!
abc = 3 // não fazer declaração
//console.log(global.abc)


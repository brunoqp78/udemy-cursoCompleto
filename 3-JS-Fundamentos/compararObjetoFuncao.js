//Object é função
console.log(typeof Object)
// aqui criamos um objeto
console.log(typeof new Object())

const Cliente = function(){}
console.log(typeof Cliente)
// aqui criamos um objeto, não precisa de ()
console.log(typeof new Cliente)

class Produto {}// ES 2015
console.log(typeof Produto)
// aqui criamos um objeto, não precisa de ()
console.log(typeof new Produto())

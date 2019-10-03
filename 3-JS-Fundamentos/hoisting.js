//coisa nova
// jogar para cima
// a variável a é declarada antes de executar
// ou seja, ela existe apenas não está definida
console.log('a = ', a)
var a = 2
console.log('a = ', a)

//código real é:
//var a
//console.log('a = ', a)
//a = 2
//console.log('a = ', a)

// isso é má prática

//__________________
// com let não ocorre e não pode
//console.log('b= ',b)
let b = 2
console.log('b= ',b)

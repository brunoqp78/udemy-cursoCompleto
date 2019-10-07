console.log(soma(4,3))
//console.log(sub(4,3)) // a função sub ainda não foi definida

// function declaration, pode ser utilizada em qualquer parte do arquivo .js
function soma(x,y){
    return x+y
}

// function expression
const sub = function (x,y){
    return x-y
}
console.log(sub(4,3))

// named function expression
const mult = function mult(x,y){
    return x*y
}
console.log(mult(4,3))

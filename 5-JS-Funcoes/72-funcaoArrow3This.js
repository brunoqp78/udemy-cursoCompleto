//outros experimentos com arrowfunction e this
let comparaComThis = function (param){
    console.log(this === param)
}
// uma function normal, na parte global, this é igual a global
comparaComThis(global) // true

const obj ={}
// a função bind, setou o this para o obj criado
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true

// a função com arrowfunction é criado dentro de um modulo, assim this é o modulo
// this depende do contexto no arrowfunction
let comparaComThisArrow = param => {
    console.log(this === param)
}

comparaComThisArrow(global)// false
comparaComThisArrow(obj)// false
comparaComThisArrow(module.exports) //true

//bind é mais fraco que o arrowfunction, nele this é sempre o modulo atual
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false
comparaComThisArrow(module.exports) //true

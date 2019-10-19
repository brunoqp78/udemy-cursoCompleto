// let e const
// não uraremos mais o var
// let é escopo de bloco e função

{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b)//não acessa, é limitado por acesso ao bloco

// Template String
const produto = 'ipad'
console.log (`${produto} é caro`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x,y] = [1,2,3]
console.log(x,y)

const {idade: i, nome} = {nome:'Ana', idade:9}
console.log(i, nome)
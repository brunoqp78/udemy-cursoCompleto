// JavaScript Object notation é diferente de notação objeto literal
// JSON aceita apenas dados - principal troca de dados dos sistemas web

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

// do objeto para o JSON
console.log(JSON.stringify(obj))//gera um JSOn, sem a função claro

//console.log(JSON.parse("{ a: 1, b:2, c:3 }"))//falso
//console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3 }"))// falso também
console.log(JSON.parse('{ "a": 1, "b": 2, "c":3 }'))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] } '))

// converter um JSON para objeto
const objGerado = JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] } ')

objGerado.a = 10
console.log(objGerado)

// há vários sites que validam JSON: https://jsonlint.com/
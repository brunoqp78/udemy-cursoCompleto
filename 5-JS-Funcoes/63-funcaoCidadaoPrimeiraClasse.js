//criar uma função de forma literal
function f1(){}
//se não tiver return, ela retorna undefined

//armazenar uma função em uma variavel
const f2 = function(){}
// utiliza uma função anonima e atribui a uma constante

//armazenar funções em um array
const array = [
    function(a,b){return a+b}, 
    f2,
    f1]

console.log(array[0](2,3))

// armazenar funcoes em um atributo de um objeto

const obj = {}
obj.falar = function(){return 'Oi'}

console.log(obj.falar())

//Passar função como parametro para outras funções
function run(fun){
    fun()
}

run(function(a,b){console.log('executando')})

// Uma função pode retornar uma outra função, ou seja uma função pode conter outra função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
//a função retorna uma função, o primeiro parametro é da chamada original e o segundo da segunda funcao, aquela retornada
soma(2,3)(4)
//temos a opção de salvar a função retornada e depois utilizar ela.
const cincoMais = soma(2,3)
cincoMais(4)
// variável global para o sistema
{ 
    { 
        { 
            { 
                var sera = 'Sera???' 
            } 
        } 
    } 
}

// a variável é visivel em qualquer bloco
// a maioria das linguagens permite o acesso da variável apenas no bloco
console.log(sera)

// variável local da função
function teste(){
    // escopo dentro da função
    var local = 123
}

teste()
// não consegue acessar a var da função
// console.log(local)

// variaveis fora de funções são globais
// evitar, pela manutenibilidade
// ainda mais por ser fracamente tipado

// var pode ser local(função) ou global



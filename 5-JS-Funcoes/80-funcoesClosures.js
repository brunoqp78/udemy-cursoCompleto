// Closure é o escopo criado quando uam função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora(){
    const x = 'Local'
    // a função dentro esta interna a fora, então acessa o x da função fora()
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
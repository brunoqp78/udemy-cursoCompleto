// par nome/valor
// contexto global
const saudacao = 'seja bem vindo' // contexto léxico

// contexto da função
function exec(){
    const saudacao = 'oi' // contexto léxico 2
    return saudacao
}

//Objeto são grupos aninhados de pares nome/valo

const cliente = {
    nome: 'Pedro', 
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Angra',
        numero: 123
    },
    numero: 1
}

console.log(saudacao)
console.log(exec())
console.log(cliente)



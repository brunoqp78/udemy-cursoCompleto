// baseado no padrão Factory
const prod1 = {
    nome:'coca',
    preco: 45
}

const prod2 = {
    nome:'coca',
    preco: 45
}
// repetitivo, e ineficiente... declarando vários TAD uma para cada dado

//solucao: uma função que retorna um objeto, uma fabrica de objetos
//nesse exemplo, um objeto estático, valores constantes
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
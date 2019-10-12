// a função retornada pelo modulo recebe vários parametros nome
module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana ${nome}`)
}
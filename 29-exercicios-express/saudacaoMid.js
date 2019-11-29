function saudacao(nome) {
    // uma função que retorna uma função middleware
    return function(req, res, next) {
        console.log(`Seja bem vindo ${nome}.`)
        
        next()
    }
}

module.exports = saudacao
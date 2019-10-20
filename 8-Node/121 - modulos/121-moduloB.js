// não é visivel fora do módulo
let x = 'algo'


// visivel fora do módulo
module.exports = {
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa Noite'
    }
}
function salvar(req, res) {
    res.send('Usuario > salvar')
}

function obter(req, res) {
    res.send('Usuario > obter')
}

// necessário para as funções ficarem visiveis
module.exports = { salvar, obter }
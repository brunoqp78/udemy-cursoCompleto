// para evitar que os arquivos modifiquem o objeto global, podemos congelá-lo com freeze
global.MinhaAPP2 = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})
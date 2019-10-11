//como organizar/modularizar
//frontend:
// não usar apenas um arquivo, utilize vários arquivos.
// todo o código será compactado em poucos arquivos para ser processado no browser
//backend:
// no node, um arquivo representa um módulo
// no node, podemos trabalhar normalmente como um servidor web
// um módulo tem um encapsulamento dentro dele. Para tornar público precisa exportar e importar no outro.
// todos os nossos arquivos foram criados como módulos até agora

//aula

// this permite exportar, ser visivel externamente
// this aponta para o módulo
this.ola = 'Fala Pessoal'
exports.bemvindo = 'Bem vindo ao node!'
module.exports.ateLogo = 'Até o próximo exemplo'
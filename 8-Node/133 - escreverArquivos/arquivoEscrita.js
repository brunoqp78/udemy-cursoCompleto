const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1240.99,
    desconto: 0.15
}

// chama a função assincrona writeFile, indica o nome do arquivo, o conteudo a inserir e a arrowFunction que será executada
// a array function recebe o parametro err, que indica se houve ou não erro.
// ele imprime o erro se houver ou 'Arquivo Salvo!' se não houver
// sobrescreve
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
    //outra forma - similar a anterior
    if (err){
        console.log(err)
    }
    else{
        console.log('Arquivo salvo!')
    }
})

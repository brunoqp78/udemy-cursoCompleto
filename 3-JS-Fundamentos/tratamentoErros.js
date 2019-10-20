//try catch throw

function tratarErroLancar(erro){
   //throw new Error('...')
   //throw 10
   //throw true
   //throw 'mensagem'
   throw {
       nome : erro.nome,
       mensagem : erro.message,
       data : new Date()
   
   }
}

function imprimirNomeGritado(objeto){
    try{
        console.log(objeto.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroLancar(e)
    }finally{
        console.log('final')
    }
}

const objeto = {nome: 'Roberto'}
imprimirNomeGritado(objeto)
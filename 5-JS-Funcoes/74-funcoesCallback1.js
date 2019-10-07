//baseado no padrão observer
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice+1}.${nome}`)
}

//Para cada fabricante chame a função imprimir, ela recebe como primeiro parametro o conteudo e depois o index
fabricantes.forEach(imprimir)
//Para cada fabricante chame essa nova função, ela recebe o primeiro parametro, conteúdo
fabricantes.forEach(function(a){
    console.log(a)
})
//Usando Callback e ArrowFunction.
//Para cada fabricante pegue o fabricante e imprima ele, o conteudo
fabricantes.forEach(fabricantes=>console.log(fabricantes))

//Ativou a função vazia que imprime mais um para cada fabricante
fabricantes.forEach(()=>console.log('mais um'))

// a função forEach para cada elemento ativa a função que está como parametro
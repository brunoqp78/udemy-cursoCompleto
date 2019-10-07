const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}
minhaFuncao()

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

//imprime 'global' pois a função chamada minhaFuncao() esta acessando um valor que não é interno dela e o valor com 'local' é interno ao exec
exec()

function minhaFuncao2(v=valor){
    console.log(v)
}
minhaFuncao2()

function exec2(){
    const valor = 'Local'
    minhaFuncao2(valor)
}

exec2()
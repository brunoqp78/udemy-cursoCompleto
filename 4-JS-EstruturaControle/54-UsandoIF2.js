function teste(num){
    if (num>7)
        console.log(num)
        console.log('Final') //sempre executa
        //problema de identação
    }
teste(6)
teste(8)

function teste2(num){
    if (num>7);{// o ; finaliza o if, sempre será executado o bloco abaixo. não usar o ; no bloco
        console.log(num)
    }
}

teste2(6)
teste2(8)
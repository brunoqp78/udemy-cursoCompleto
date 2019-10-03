const funcs = []

for(var i=0;i<10;i++)
{
    // função anonima
    funcs.push(function (){
        console.log(i)
    })
}

// a variavel i não tem escopo de bloco, ou seja, utiliza o valor no momento agora... ou seja igual a 10
funcs[2]()
funcs[8]()
const funcs = []

for(let i=0;i<10;i++)
{
    // função anonima
    funcs.push(function (){
        console.log(i)
    })
}

// a variavel i tem escopo de bloco, ou seja, utiliza o valor no momento que foi criado no bloco for
// o let garante a memória do momento que a função foi criada
funcs[2]()
funcs[8]()

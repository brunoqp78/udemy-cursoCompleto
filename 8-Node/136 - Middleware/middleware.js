// middleware pattern (chain of responsibility)
// a função há dois parametros
// 1° indica os dados que estão sendo processados
// 2° indica a próxima função (recebe como parametro a função de execução com o indice correspondendo a função)
// é tipo uma lista de funções a serem executadas é dinamica, pois é passada como parametro
const passo1 = (ctx, next)=>{
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next)=>{
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

// função que controla a execução, recebe um parametro que é o objeto que será processado e as funções middleware
// pode haver quantas funções como for necessário
const exec = (ctx, ...middlewares) =>{
    // execPasso é uma função recursiva, o criterio de parada é middleware igual a vazio (!middlewares) ou 
    // indice >= middlewares.length
    const execPasso = indice =>{    
        // há middleware e o indice é menor que a quantidade e execute o middleware
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice+1))
    }
    execPasso(0)
}

const ctx = {}
exec (ctx, passo1, passo2, passo3)
console.log(ctx)
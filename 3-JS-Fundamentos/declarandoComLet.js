//diferenças do Let com o Var
let numero =1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

//let considera o escopo das chaves{}.
//o let considera o escopo atual dado pelas chaves.
//utilizar o let por isso.
//o var sobrescreveria o valor de numero. Por ter escopo global apenas.
//o let manteria duas variaveis, baseados em seus escopo
//o let tem escopo de blocos de {} e o var não tem

//tentar evitar o máximo
const numeros = [1,2,3,4,5,6,7,8,9,10]
for (let x in numeros){
    if (x == 5) {
        break // age em for, while e switch, não no if
    }
    console.log(`${x} = ${numeros[x]}`)
}

for (let y in numeros){
    if (y == 5) {
        continue // para a execução da iteração atual de for ou while
    }
    console.log(`${y} = ${numeros[y]}`)
}

//evitar isso, não fazer, é uma possibilidade
externo:
for(let a in numeros){
    for(let b in numeros){
        if (a ==2 && b == 3){
            //break //laço interno
            break externo // laço externo
        }
        console.log(`Par = ${a},${b}`)
    }
}
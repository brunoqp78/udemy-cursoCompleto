for (let letras of "Cod3r"){
    console.log(letras)
}

const assuntosEcma = ['Map', 'Set', "promise"]

// for in pega o indice do conjunto
for (let i in assuntosEcma){
    console.log(`${i} = ${assuntosEcma[i]}`)
}

// for of pega o valor
for (let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

// for pega o conteudo de um posicao 
for (let assunto of assuntosMap){
    console.log(assunto)
}
// for pega a chave para cada elemento map
for (let chave of assuntosMap.keys()){
    console.log(chave)
}
// for pega o valor de cada elemento do map
for (let valor of assuntosMap.values()){
    console.log(valor)
}

// for para percorrer as entries de um vetor
// fazendo um destructing das entradas do map
for (let [ch,vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a','b','c'])
// usando o for of em Set
for (let letra of s){
    console.log(letra)
}
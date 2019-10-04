// no array o destructuring usa []
const [a] = [10]
console.log(a)

// as variaveis recebem os valores na ordem existentes
// espaços vazios ,, descartam os valores
// posições inexistentes recebem undefined ou o valor default(n6=0)
const [n1,, n3, , n5, n6=0]=[10,7,9,8]
console.log(n1, n3, n5, n6)

// primeiro ignorou, o segundo elemento é um array e pegara o segundo elemento desse array interno
// não recomenda, pois é muito complexo a leitura
const [, [, nota]] = [[,8,8],[9,6,8]]
console.log(nota)

//destruction utiliza {}=objetos ou[]=vetores
//muito interessante
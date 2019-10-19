// não indexada e não aceita repetição
const times = new Set()
times.add('vasco')
times.add('São paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('vasco') // será ignorado, pois não há repetição

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.delete('vasco'))

const nomes = ['Raquel', 'Lucas', 'Lucas']
const todosNomes = new Set(nomes) // desconsidera as repetições
console.log(todosNomes)
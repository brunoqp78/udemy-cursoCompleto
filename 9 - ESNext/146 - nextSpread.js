// se espalha é spread e se junta é rest

// usar spread com objetos
const funcionario = {nome : 'Maria', salario: 12343.43}
// usando o spread para espalhar/copiar os atributos de uma variavel/objeto para gerar uma nova
const clone = { ativo: true, ...funcionario}


console.log(funcionario)
console.log(clone)

// usar o spread com array
const grupo = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafa', ... grupo]
const grupoFinal2 = ['Maria', 'Rafa', ... grupo, 'Pedro', 'Bruno']

console.log(grupo)
console.log(grupoFinal)
console.log(grupoFinal2)


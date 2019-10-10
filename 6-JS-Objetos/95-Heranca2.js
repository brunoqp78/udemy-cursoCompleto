//Cadeia de protótipos (prototype chain)
const avo = { atr1: 'A'} // objeto avo
const pai = {__proto__: avo, atr2:'B', atr3: 'algo'} // herdei de avo
const filho = {__proto__:pai, atr3:'C'}
console.log(filho.atr1)//buscou do avo
console.log(filho.atr2)//buscou do pai
console.log(filho.atr0)//não existe
console.log(filho.atr3)//pegou do filho e não do pai

//podemos definir propriedades no mais alto nivel(object)
Object.prototype.atr0 = '0' //não recomendado
console.log(filho.atr0)//agora existe

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual+delta <=this.velMax){
            this.velAtual +=delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo:'F40',
    velMax: 324 //shadowing, sombreamento, sobrescreve o do pai
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // nesse momento estabeleci a relação de herança entre ferrari e carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)//não imprime as propriedades e funções dos pais, mas pode chamar
volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())
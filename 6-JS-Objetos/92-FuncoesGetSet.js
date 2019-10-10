function Objeto1(atr1, atr2) {
    this.atributo1 = atr1
    this.atributo2 = atr2
    this.funcao2 = function () { return this.atributo1 + this.atributo2 }
}

//aula começa aqui, sobre Set e get
//forma de encapsular... não há private
const sequencia = {
    _valor: 1, //convenção, não é private, mas usado como
    get valor(){ return this._valor++},
    set valor(valor){
        if (valor > this._valor){
            this._valor = valor
        }
    }
    //java script não aceita sobrecarga, apenas nesse caso
}
console.log(sequencia.valor) // ele chama o método get criado, precisa ser o mesmo nome da variável
console.log(sequencia.valor)
sequencia.valor = 1000 //chama o método set
console.log(sequencia.valor)
console.log(sequencia.valor)
sequencia.valor = 100 //chama o método set
console.log(sequencia.valor)
console.log(sequencia.valor)


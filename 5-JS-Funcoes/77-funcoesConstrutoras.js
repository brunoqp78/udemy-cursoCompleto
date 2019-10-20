function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado, no escopo da função Carro
    // let aqui significa private
    let velocidade = 0

    //métodopublico
    this.acelerar = function () {
        if (velocidade + delta <= velocidadeMaxima){
            velocidade +=delta
        }else{
            velocidade = velocidadeMaxima
        }
    }

    
    // outro metodo publico
    this.getVelocidade = function(){
        return velocidade
    }
}

//chamando os parametros padrões
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidade())

//utilizando o construtor passando os valores
const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidade())

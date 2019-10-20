function Pessoa(){
    //esse this aponta para Pessoa
    this.idade = 0
    this.peso = 10
    const self = this
    setInterval(function(){
        //esse this aponta para o temporizador que controla osetInterval
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
    // function(){}.bind(this) = garante que o this interno aponta para o contexto que chama a função, no caso a classe pessoa
    
    // nesse caso utilizamos outra possibilidade de resolver o problema do this
    // um jeitinho, salvamos o this da pessoa na variavel self e utilizamos ela na outra função, ou seja, mesmo em outro contexto o this foi mantido pela constante self
    setInterval(function(){
        self.peso++
        console.log(self.peso)
    },100)
}

new Pessoa


function Pessoa(){
    this.idade = 0
    // como é função arrow, o this funciona, ele aponta para a classe pessoa
    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
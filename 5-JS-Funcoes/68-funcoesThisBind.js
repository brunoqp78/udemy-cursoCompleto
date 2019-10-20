const pessoa={
    saudacao : 'bom dia',
    falar(){
        // this aponta para pessoa
        console.log(this.saudacao)
    }
}

//pessoa.falar()

//const falar = pessoa.falar()

//falar() // conflito entre programação funcional, armazenar função em variavel, e o this é O.O
//o this é global nesse caso

//this estara garantido que apontara para a pessoa e os seus atributos
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

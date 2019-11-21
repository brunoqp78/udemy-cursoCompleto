// para criar o projeto foi necessário instalar o react e depois utiliza-lo para criar o projeto
// sudo npm i -g create-react-app
// create-react-app exercicios

// para executar é npm start

// a próxima linha é obrigatória
import React from 'react'
import ReactDOM from 'react-dom'

// componentes devem ser com a primeira letra maiusculo. O arquivo pode ser tudo minusculo.
//referente a aula 339
import Primeiro from './componentes/339primeiro'
import PrimeiroA from './componentes/339primeiroA'

// referente a aula 340
import BomDia from './componentes/340bomdia'

// referente a aula 341
import Saudacao from './componentes/341saudacoes'

// referente a aula 344
import Pai from './componentes/344pai'

// referente a aula 345
import Pai2 from './componentes/344pai2'
import Filho from './componentes/344filho'


//renderizar o primeiro elemento da pagina
// id é a o id no arquivo index.html, de um determinado elemento de lá (<div id="root">).
ReactDOM.render(<h1>React 1</h1>, document.getElementById('root'))
//meu código
const elemento = <h1>React 2</h1>
const local = document.getElementById('teste')
ReactDOM.render(elemento, local)
// o primeiro parametro é igual ao código jquery: $('<h1>').html('React')

// aula 339
const localprimeiro = document.getElementById('primeiro')
ReactDOM.render(<Primeiro/>, localprimeiro)
const localprimeiroA = document.getElementById('primeiroA')
ReactDOM.render(<PrimeiroA/>, localprimeiroA)


// aula 340
const localBomDia = document.getElementById('bomdia')
ReactDOM.render(<BomDia nome="Bruno"/>, localBomDia)

// aula 341 a 343
const localSaudacao = document.getElementById('saudacao')
ReactDOM.render(
    <div>
    <Saudacao tipo="Bom dia" nome="Joao"/>
    </div>
, localSaudacao)

// aula 344
const localPai = document.getElementById('pai')
ReactDOM.render(
    <div>
    <Pai nome="Paulo" sobrenome="Silva"/>
    </div>
, localPai)

// aula 345
const localPai2 = document.getElementById('pai2')
ReactDOM.render(
    <div>
    <Pai2 nome="Paulo" sobrenome="Silva">
        <Filho nome="Marco" sobrenome="Antonio da Silva" />
        <Filho nome="Marco2" sobrenome="Antonio da Silva" />
        <Filho nome="Marco3" sobrenome="Antonio da Silva" />
    </Pai2>
    </div>
, localPai2)

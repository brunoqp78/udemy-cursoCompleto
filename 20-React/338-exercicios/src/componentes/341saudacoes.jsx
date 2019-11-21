import React, { Component} from 'react'

export default class Saudacao extends Component{
    //estado inicial dos valores
    state = {
        tipo: this.props.tipo,
        nome:this.props.nome
    }

    // aula 342
    // necessário passar as propriedades
    constructor(props){
        super(props)
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }

    setTipo(e){
        //console.log(e.target.value)
        //função pré-existente
        this.setState({tipo: e.target.value})
    }
    setNome(e){
        //console.log(e.target.value)
        //função pré-existente
        this.setState({nome: e.target.value})
    }

    render(){
        //acessa as propriedades passadas
        //usando o operador destruction
        //const {tipo, nome} = this.props
        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                {/* <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}/> */}
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="nome..." value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}
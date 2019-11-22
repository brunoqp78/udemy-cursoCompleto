import React from 'react'
import './Button.css'

//criar componentes sem estado, quando possível
//esse componente não tem estado.
export default props => {
    //criou uma variável classes
    // define a classe baseado nas propriedades
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}
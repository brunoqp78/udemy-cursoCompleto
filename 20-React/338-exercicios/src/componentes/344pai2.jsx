import React from 'react'

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {props.children}
            {/* React.Children.map(props.children, child =>{
                return React.cloneElement(props.children, {...props}, {...props.children.props})
            }) */}
            {/* {React.cloneElement(props.children, {...props}, {...props.children.props})} */}

        </ul>
    </div>
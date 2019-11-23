import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
// dois elementos header e main
// o react.fragment não gera tags
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>
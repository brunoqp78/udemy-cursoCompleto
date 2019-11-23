import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

// define as urls para rotear
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'


export default props => 
// componente escolha
    <Switch>
        {/* usuario navega para o barra e o sistema chama o Home */}
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        {/* caso qualquer outra navega para o barra */}
        <Redirect from='*' to='/' />
    </Switch>
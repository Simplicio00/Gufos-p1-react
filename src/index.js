// o index.js é um arquivo de configuração de rotas

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Categoria from './pages/Categoria';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Usuarios from './pages/Usuarios';
import Eventos from './pages/Eventos';

const Rotas = (
    <Router>

        <div>
        <Switch>
        <Route exact path = '/' component={App}/> 
        <Route path='/Categoria' component = {Categoria}/>
        <Route path='/Login' component = {Login}/>
        <Route path='/Usuarios' component = {Usuarios}/>
        <Route path='/Eventos' component = {Eventos}/>
        <Route component={NotFound}/>
        </Switch>
        </div>
    </Router>
)


ReactDOM.render(Rotas, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

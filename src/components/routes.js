import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Logout from './Logout';
import ErroLista from './ErroLista';
import CadastroUsuario from './CadastroUsuario';
import { isAuthenticated } from '../service/auth';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={isAuthenticated() ? ErroLista : Login} />
            <PrivateRoute path="/erroLista" component={ErroLista} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/cadastroUsuario" component={CadastroUsuario} />
        </Switch>
    </Router>
);

export default Routes;
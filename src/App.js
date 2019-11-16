import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';
import CadastroUsuario from './CadastroUsuario';
import ErroLista from './ErroLista';
import ErroDetalhe from './ErroDetalhe';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact component={Login} />
        <Route path='/cadastroUsuario' component={CadastroUsuario} />
        <Route path='/erroLista' component={ErroLista} />
        <Route path='/erroDetalhe' component={ErroDetalhe} />
      </div>
    </BrowserRouter>
  );
}

export default App;

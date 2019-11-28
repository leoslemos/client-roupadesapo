import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';
import CadastroUsuario from './CadastroUsuario';
import ErroLista from './ErroLista';
// import ErroDetalhe from './ErroDetalhe';
// import Cabecalho from './Cabecalho';
// import Rodape from './Rodape';
import { isAuthenticated } from '../service/auth';


function App() {
  {console.log(isAuthenticated);}
  return (    
    <BrowserRouter>
      <div className="app">
        <Route path='/' exact component={isAuthenticated ? ErroLista : Login} />
        <Route path='/cadastroUsuario' component={CadastroUsuario} />
      </div>
    </BrowserRouter>
  );
}

export default App;

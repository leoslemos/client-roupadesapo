import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';
import CadastroUsuario from './CadastroUsuario';
import ErroLista from './ErroLista';
import ErroDetalhe from './ErroDetalhe';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <div className="App">
        <Cabecalho />
        <Route path='/' exact component={Login} />
        <Route path='/cadastroUsuario' exact component={CadastroUsuario} />
        <Route path='/erroLista' exact component={ErroLista} />
        <Route path='/erroDetalhe' exact component={ErroDetalhe} />
        <Rodape />
      </div>
    </BrowserRouter>
    
    </>
  );
}

export default App;

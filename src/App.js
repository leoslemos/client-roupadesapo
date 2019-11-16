import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';
import CadastroUsuario from './CadastroUsuario'
import CentralErro from './CentralErro';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route path='/' exact component={Login} />
        <Route path='/cadastroUsuario' component={CadastroUsuario} />
        <Route path='/centralErro' component={CentralErro} />

      </div>
    </BrowserRouter>
  );
}

export default App;

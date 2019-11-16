import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import ErroLista from './ErroLista';
import ErroDetalhe from './ErroDetalhe';

function CentralErro() {
  return (
    
    <div className="CentralErro">
        <BrowserRouter>
        
            <Route path='/centralErro/lista' component = {ErroLista} />
            <Route path='/centralErro/detalhe' component={ErroDetalhe} />
        </BrowserRouter>
        <div>CentralErro erro rodape</div>
        </div>

    
  );
}

export default CentralErro;

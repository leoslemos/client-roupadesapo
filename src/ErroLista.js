import React from 'react';
import { Link } from 'react-router-dom';

import Cabecalho from './Cabecalho';

const ErroLista = props => {
    return(
        <div>
            <Cabecalho /> 
            <Link to='/erroDetalhe'>
                <h1>Central de erros!!!</h1>
            </Link>
                 
        </div>
    )
}

export default ErroLista;
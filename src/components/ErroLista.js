import React from 'react';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';

import '../css/erroLista.css';

const ErroLista = props => {
    return(
        <div>
            <Cabecalho />
            <div className='div-filtros'>
                <div className='teste'>
                    <p>opções de filtros</p>
                </div>
            </div>
            <table>

            </table>
        </div>
    )
}

export default ErroLista;
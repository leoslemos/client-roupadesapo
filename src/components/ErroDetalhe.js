import React from 'react';
import { Link } from 'react-router-dom';

const ErroDetalhe = props => {
    return(
        <div>
            <Link to='/erroLista'>
                <i class="material-icons">reply</i>VOLTAR
            </Link>
            <h1>... Inserir Detalhes!!!</h1>         
        </div>
    )
}

export default ErroDetalhe;
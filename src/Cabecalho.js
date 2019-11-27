import React from 'react';
import { Link } from 'react-router-dom';

import './css/cabecalho.css';

const Cabecalho = props => {
    return(
        <div className='div-cabecalho'>
            <span className='nome-token'>
                <h4>Bem vido LEONARDO S. LEMOS.&nbsp;&nbsp;</h4>
                <h5>Seu token é: rsrsrsrsrsrsrsrs</h5>
            </span>
            <span className='foto-usuario'>
                <Link to='/cadastroUsuario'>
                    <img alt="cadastro" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png' />
                </Link>
                <Link to='/'><i className="material-icons"> exit_to_app</i></Link>
            </span>
        </div>
    )
}

export default Cabecalho;
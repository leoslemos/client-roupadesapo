import React from 'react';
import { Link } from 'react-router-dom';
import { getToken } from '../service/auth';

import '../css/cabecalho.css';

const Cabecalho = props => {
    return(
        <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <span className="text-white">Bem vindo Usuário. Seu token é {getToken}</span>
            <Link to='/'><i className="material-icons"> exit_to_app</i></Link>
        </div>
    )
}

export default Cabecalho;
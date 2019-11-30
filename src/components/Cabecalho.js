import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { isAuthenticated } from '../service/auth';

import Logo from '../assets/images/logo.png'

const Cabecalho = props => {

    var token = '';
    var user_token = '';

    if (isAuthenticated()) {
        token = sessionStorage.getItem('jwt_token').split('.');
        user_token = token[1];
    }

    return(
        <div>
            <Navbar expand="lg" bg="info" className='d-flex justify-content-between'>
                <Link to='/' className="navbar-brand"><img src={Logo} width={80} alt="Logotipo da Codenation" /></Link>
                <span className="text-white">Bem vindo Usuário. Seu token é {user_token}</span>
                <Link to='/logout' className='text-white'>Sair</Link>
            </Navbar>
        </div>
    )
}

export default Cabecalho;
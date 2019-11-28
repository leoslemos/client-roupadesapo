import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

import Logo from '../assets/images/logo.png'
import '../css/cabecalho.css';

const Cabecalho = props => {
    return(
        <div>
            <Navbar expand="lg" bg="info" className='d-flex justify-content-between'>
                <Link to='/' className="navbar-brand"><img src={Logo} width={80} alt="Logotipo da Codenation" /></Link>
                <span className="text-white">Bem vindo Usuário. Seu token é A4S66A4S6aASasdasd</span>
                <Link to='/logout' className='text-white'>Sair</Link>
            </Navbar>
        </div>
    )
}

export default Cabecalho;
import React from 'react';
import { Link } from "react-router-dom";


import './css/login.css';

const Login = props => {
    return(
        <div>
            <h3> CentralErro de Erros</h3>
            <h5> Roupa de Sapo</h5>
            <div className='div-content'>
                <form>
                    <form className='form-group'>
                        <label className='form-label'>E-mail</label><br />
                        <input className='form-control' type='email' placeholder='Informe seu e-mail'></input>
                    </form>
                    <form className='form-group'>
                        <label className='form-label'>Senha</label><br />
                        <input className='form-control' type='password' placeholder='Digite sua senha'></input>
                    </form>
                    <Link to='/CentralErro'>
                        <button className='btn-block'>Acessar</button>
                    </Link>
                </form>
                
                <div className='novo-cadastro'>
                    <Link to='/cadastroUsuario' >Novo Cadastro</Link>
                </div>
            </div>
            <h6>Projeto Final Aceleradev Codenation Softplan - Sienge</h6>
        </div>
    )
}

export default Login
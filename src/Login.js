import React from 'react';
import { Link } from "react-router-dom";


import './css/login.css';

const Login = props => {
    return(
        <div className='div-login'>
            <h3> Central de Erros</h3>
            <h4> Roupa de Sapo</h4>
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
                    <Link to='/erroLista'>
                        <button className='btn-block'>Acessar</button>
                    </Link>
                </form>
                
                <div className='novo-cadastro'>
                    <Link to='/cadastroUsuario' >Novo Cadastro</Link>
                </div>
            </div>
            <p><b>Projeto Final Aceleradev Codenation Softplan - Sienge</b></p>
        </div>
    )
}

export default Login
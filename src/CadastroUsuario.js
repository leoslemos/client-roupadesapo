import React from 'react';
import { Link } from 'react-router-dom';
import './css/login.css';


const CadastroUsuario = props => {
    return(
        <div>
            <h3> CentralErro de Erros</h3>
            <h5> Roupa de Sapo</h5>
            <div className='div-content cadastro-usuario'>
                <form>
                    <form className='form-group'>
                        <label className='form-label'>Nome Completo</label><br />
                        <input className='form-control' type='email' placeholder='Informe seu nome'></input>
                    </form>
                    <form className='form-group'>
                        <label className='form-label'>E-mail</label><br />
                        <input className='form-control' type='email' placeholder='Informe seu e-mail'></input>
                    </form>
                    <form className='form-group'>
                        <label className='form-label'>Senha</label><br />
                        <input className='form-control' type='password' placeholder='Digite sua senha'></input>
                    </form>
                    <Link to='/'><button className='btn-block'>Salvar</button></Link>
                </form>
            </div>
            <h6>Projeto Final Aceleradev Codenation Softplan - Sienge</h6>
        </div>
    )
}

export default CadastroUsuario;
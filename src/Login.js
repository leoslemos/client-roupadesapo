import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import oauth from 'axios-oauth-client';


import './css/login.css';
const API_URL = "http://localhost:8080";
// const username = "john@domain.com"
// const password = "123456";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    componentDidMount() {        
    }

    handleSubmit(e) {
        e.preventDefault();

        let email    = this.state.user.email;
        let password = this.state.user.password;

        axios.post(`${API_URL}/login`,
            { email: `${email}`, password: `${password}` })
            .then(resp => {
                console.log(resp);
            })
            .catch(error => {
                console.log("error: " + error);
        });
    }

    handleChangeEmail(e) {
        let password = this.state.user.password
        this.setState({
            user: {
                email: e.target.value,
                password: password
            }
        });
    }

    handleChangePassword(e) {
        let email = this.state.user.email;
        this.setState({
            user: {
                email: email,
                password: e.target.value
            }
        });
    }
    
    render() {
        return(
            <div className='div-login'>
                <h3> Central de Erros</h3>
                <h4> Roupa de Sapo</h4>
                <div className='div-content'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label className='form-label'>E-mail</label><br />
                            <input className='form-control' type='email' name='email' placeholder='Informe seu e-mail' onChange={this.handleChangeEmail}></input>
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Senha</label><br />
                            <input className='form-control' type='password' name='password' placeholder='Digite sua senha' onChange={this.handleChangePassword}></input>
                        </div>
                        <button type="submit" className='btn-block'>Acessar</button>
                    </form>
                    
                    <div className='novo-cadastro'>
                        <Link to='/cadastroUsuario' >Novo Cadastro</Link>
                    </div>
                </div>
                <p><b>Projeto Final Aceleradev Codenation Softplan - Sienge</b></p>
            </div>
        );
    }
}
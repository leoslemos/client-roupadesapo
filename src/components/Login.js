import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { login } from '../service/auth';
import axios from 'axios';

import '../css/login.css';

const API_URL = "http://localhost:8080";

const initialState = {
    user: {
        email: '',
        password: '',
        token: '',
        error: ''
    }
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {...initialState}
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    componentDidMount() {        
    }

    handleSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        let email    = this.state.user.email;
        let password = this.state.user.password;

        axios.post(`${API_URL}/login`,
            { email: `${email}`, password: `${password}` })
            .then(resp => {
                if (resp.status === 200 && resp.data !== null) {
                    this.setState(prevState => ({
                        user: {
                            ...prevState.user,
                            token: resp.data
                        }
                    }));
                    login(resp.data);
                    history.push('/erroLista');
                }
            })
            .catch(error => {
                console.log("error: " + error);
        });
    }

    handleChangeEmail(e) {
        e.persist();
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                email: e.target.value
            }
        }));
    }

    handleChangePassword(e) {
        e.persist();
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                password: e.target.value
            }
        }));
    }
    
    render() {
        return(
            <div className='container form-login'>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-6">
                        <div className="card">
                            <div className="card-header bg-white">
                                <h3 className="card-title text-center">Login</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                        <label className='form-label'>E-mail</label><br />
                                        <input className='form-control' type='email' name='email' placeholder='Informe seu e-mail' onChange={this.handleChangeEmail}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-label'>Senha</label><br />
                                        <input className='form-control' type='password' name='password' placeholder='Digite sua senha' onChange={this.handleChangePassword}></input>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className='btn btn-info btn-block'>Acessar</button>
                                    </div>
                                    <div className="form-group justify-content-center">
                                        <Link to='/cadastroUsuario' >Novo aqui? Registre-se</Link>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer bg-white text-center">
                                <span><b>Projeto Final Aceleradev Codenation Softplan - Sienge</b></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
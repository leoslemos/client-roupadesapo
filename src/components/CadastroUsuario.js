import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const initialState = {
    user: {
        email: '',
        password: '',
        fullName: ''
    }
}

const API_URL = "http://localhost:8080";

class CadastroUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...initialState};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        let email    = this.state.user.email;
        let password = this.state.user.password;
        let fullName = this.state.user.fullName;

        axios.post(`${API_URL}/v1/user`,
            { email: `${email}`, password: `${password}`, fullName: `${fullName}` })
            .then(resp => {
                if (resp.status === 201 && resp.data !== null) {
                    history.push('/');
                }
            })
            .catch(error => {
                console.log("error: " + error);
        });
    }

    handleChangeName(e) {
        e.persist();
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                fullName: e.target.value
            }
        }));
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
                                <h3 className="card-title text-center">Criar Nova Conta</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                        <label className='form-label'>Nome Completo</label><br />
                                        <input className='form-control' type='text' name='fullName' placeholder='Informe seu nome' onChange={this.handleChangeName}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-label'>E-mail</label><br />
                                        <input className='form-control' type='email' name='email' placeholder='Informe seu e-mail' onChange={this.handleChangeEmail}></input>
                                    </div>
                                    <div className='form-group'>
                                        <label className='form-label'>Senha</label><br />
                                        <input className='form-control' type='password' name='password' placeholder='Digite sua senha' onChange={this.handleChangePassword}></input>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className='btn btn-info btn-block'>Cadastrar</button>
                                    </div>
                                    <div className="form-group justify-content-center">
                                        <Link to='/' >Já é cadastrado? Faça login</Link>
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
        )
    }
}

export default CadastroUsuario;
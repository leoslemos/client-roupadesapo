import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../service/auth';
import { Container, Row, Col, Card, Alert, Form, Button } from 'react-bootstrap';

import '../css/login.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            },
            errorMessage: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    componentDidMount() {
        document.getElementById('app_body').classList.add('bg-login');
    }

    handleSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        let email    = this.state.user.email;
        let password = this.state.user.password;

        if (email === '' || password === '') {
            this.setState(prevState => ({
                ...prevState.user,
                errorMessage: "Credenciais inválidas!"
            }));
            return;
        }

        axios.post(`${API_URL}/login`,
            { email: `${email}`, password: `${password}` })
            .then(resp => {
                if (resp.status === 200 && resp.data !== null) {
                    let token = resp.data.replace("Bearer ", "");
                    this.setState(prevState => ({
                        user: {
                            ...prevState.user,
                            errorMessage: ''
                        }
                    }));
                    sessionStorage.setItem('jwt_token', token);
                    history.push('/erroLista');
                    return;
                }
                throw new Error("Falha ao efetuar o login")
            })
            .catch(error => {
                this.setState(prevState => ({
                    ...prevState.user,
                    errorMessage: "Falha ao efetuar o login"
                }));
        });
    }

    handleChangeEmail(e) {
        e.persist();
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                email: e.target.value
            },
            errorMessage: ''
        }));
    }

    handleChangePassword(e) {
        e.persist();
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                password: e.target.value
            },
            errorMessage: ''
        }));
    }
    
    render() {
        return(
            <Container className='form-login'>
                <Row className="justify-content-center align-items-center h-100">
                    <Col sm={6} md={6} lg={4} xl={6}>
                        <Card>
                            <Card.Header className="bg-white">
                                <Card.Title className="text-center">Login</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                {
                                    this.state.errorMessage !== '' ? 
                                    (
                                        <Alert variant="danger" className="text-center">{this.state.errorMessage}</Alert>
                                    ) : ''
                                }
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>E-mail</Form.Label><br />
                                        <Form.Control 
                                            type='email' 
                                            name='email' 
                                            placeholder='Informe seu e-mail' 
                                            onChange={this.handleChangeEmail} 
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Senha</Form.Label><br />
                                        <Form.Control 
                                            type='password' 
                                            name='password' 
                                            placeholder='Digite sua senha' 
                                            onChange={this.handleChangePassword} 
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button type="submit" variant="info" block>Acessar</Button>
                                    </Form.Group>
                                    <Form.Group className="justify-content-center">
                                        <Link to='/cadastroUsuario' >Novo aqui? Registre-se</Link>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                            <Card.Footer className="bg-white text-center">
                                <span><b>Projeto Final Aceleradev Codenation Softplan - Sienge</b></span>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
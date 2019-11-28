import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../service/auth';
import { Container, Row, Col, Card, Alert, Form, Button } from 'react-bootstrap';

const initialState = {
    user: {
        email: '',
        password: '',
        fullName: ''
    },
    errorMessage: ''
}

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

        if (email === '' || password === '' || fullName === '') {
            this.setState(prevState => ({
                ...prevState.user,
                errorMessage: "Todos os campos são obrigatórios!"
            }));
            return;
        }

        axios.post(`${API_URL}/v1/user`,
            { email: `${email}`, password: `${password}`, fullName: `${fullName}` })
            .then(resp => {
                if (resp.status === 201 && resp.data !== null) {
                    history.push('/');
                }
            })
            .catch(error => {
                this.setState(prevState => ({
                    ...prevState.user,
                    errorMessage: "Erro ao efetuar o cadastro"
                }));
                return;
        });
    }

    handleChangeName(e) {
        e.persist();
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                fullName: e.target.value
            },
            errorMessage: ''
        }));
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
            <div>
                <Container className="form-login">
                    <Row className="justify-content-center align-items-center h-100">
                        <Col sm={6} md={6} lg={4} xl={6}>
                            <Card>
                                <Card.Header className="bg-white">
                                    <Card.Title className="text-center">Criar Nova Conta</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    {
                                        this.state.errorMessage !== '' ? 
                                        (
                                            <Alert variant="danger" className="text-center">{this.state.errorMessage}</Alert>
                                        ) : ''
                                    }
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="userRegisterName">
                                            <Form.Label>Nome Completo</Form.Label><br />
                                            <Form.Control 
                                                type='text' 
                                                name='fullName' 
                                                placeholder='Informe seu nome' 
                                                onChange={this.handleChangeName} 
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="userRegisterEmail">
                                            <Form.Label>E-mail</Form.Label><br />
                                            <Form.Control 
                                                type='email' 
                                                name='email' 
                                                placeholder='Informe seu e-mail' 
                                                onChange={this.handleChangeEmail} 
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="userRegisterPassword">
                                            <Form.Label>Senha</Form.Label><br />
                                            <Form.Control 
                                                type='password' 
                                                name='password' 
                                                placeholder='Digite sua senha' 
                                                onChange={this.handleChangePassword} 
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Button type="submit" variant="info" block>Cadastrar</Button>
                                        </Form.Group>
                                        <Form.Group className="justify-content-center">
                                            <Link to='/' >Já é cadastrado? Faça login</Link>
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
            </div>
        )
    }
}

export default CadastroUsuario;
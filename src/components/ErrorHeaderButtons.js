import React from 'react';
import { Row, Col, ButtonToolbar, Button, Jumbotron, Modal, Form } from 'react-bootstrap';
import { getToken, API_URL } from '../service/auth';
import axios from 'axios';

const button_min_width = {minWidth: '6rem'}

class ErrorHeaderButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            log: {
                title: '',
                description: '',
                origin: '',
                environmentEnum: '',
                levelEnum: ''
            },
            show: false
        };
        
        this.handleShow = this.handleShow.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeOrigin = this.handleChangeOrigin.bind(this);
        this.handleChangeEnvironment = this.handleChangeEnvironment.bind(this);
        this.handleChangeLevel = this.handleChangeLevel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShow(){
        let show = this.state.show;
        this.setState({
            show: !show
        });
    }

    handleChangeTitle(e) {
        e.persist();
        this.setState(prevState => ({
            log: {
                ...prevState.log,
                title: e.target.value
            },
            ...prevState.show
        }));
    }

    handleChangeDescription(e) {
        e.persist();
        this.setState(prevState => ({
            log: {
                ...prevState.log,
                description: e.target.value
            },
            ...prevState.show
        }));
    }

    handleChangeOrigin(e) {
        e.persist();
        this.setState(prevState => ({
            log: {
                ...prevState.log,
                origin: e.target.value
            },
            ...prevState.show
        }));
    }

    handleChangeEnvironment(e) {
        e.persist();
        this.setState(prevState => ({
            log: {
                ...prevState.log,
                environmentEnum: e.target.value
            },
            ...prevState.show
        }));
    }

    handleChangeLevel(e) {
        e.persist();
        this.setState(prevState => ({
            log: {
                ...prevState.log,
                levelEnum: e.target.value
            },
            ...prevState.show
        }));
    }
    

    handleSubmit(e) {

        let title = this.state.log.title;
        let description = this.state.log.description;
        let origin = this.state.log.origin;
        let environmentEnum = this.state.log.environmentEnum;
        let levelEnum = this.state.log.levelEnum;

        axios.post(`${API_URL}/v1/log`,
            { 
                title: title, 
                description: description,
                origin: origin,
                environmentEnum: environmentEnum,
                levelEnum: levelEnum

            },
            { headers: { 'Authorization':`Bearer ${getToken}`}})
        .then(resp => {
            this.props.saveLog('');
            this.setState({show: false});
        })
        .catch(error => {
        });
    }

    render() {
        return (
            <div>
                <Jumbotron style={{backgroundColor: '#e1e1e1', padding: '2rem 2rem', marginBottom: 0}}>
                    <Row>
                        <Col>
                            <ButtonToolbar>
                                <Button variant="outline-primary" className="mr-5" style={button_min_width} onClick={this.handleShow}>Novo +</Button>
                                <Button variant="outline-secondary" className="mr-5" style={button_min_width}>Arquivar</Button>
                                <Button variant="outline-danger" style={button_min_width}>Apagar</Button>
                            </ButtonToolbar>
                            
                            <Modal show={this.state.show} onHide={this.handleShow}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Novo Log de Erros</Modal.Title>
                                </Modal.Header>
                                
                                <Modal.Body>
                                    <Form>
                                        <Form.Group as={Col} controlId="logTitle">
                                            <Form.Control 
                                                type="text" 
                                                name="title"
                                                placeholder="Título do erro..."
                                                aria-label="title"
                                                aria-describedby="title"
                                                onChange={this.handleChangeTitle}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="logDescription">
                                            <Form.Control 
                                                type="text"
                                                name="description" 
                                                placeholder="Descrição do erro..."
                                                aria-label="description"
                                                aria-describedby="description"
                                                onChange={this.handleChangeDescription}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="logOrigin">
                                            <Form.Control 
                                                type="text"
                                                name="origin" 
                                                placeholder="Origem do erro..."
                                                aria-label="origin"
                                                aria-describedby="origin"
                                                onChange={this.handleChangeOrigin}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridEnvironment">
                                            <Form.Control 
                                                as="select" 
                                                name="environmentEnum"
                                                onChange={this.handleChangeEnvironment}
                                            >
                                                <option value="">Ambiente</option>
                                                <option value="PRODUCTION">Produção</option>
                                                <option value="TEST">Homologação</option>
                                                <option value="DEVELOPMENT">Desenvolvimento</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridEnvironment">
                                            <Form.Control 
                                                as="select" 
                                                name="levelEnum"
                                                onChange={this.handleChangeLevel}
                                            >
                                                <option value="">Nível</option>
                                                <option value="ERROR">Erro</option>
                                                <option value="WARNING">Aviso</option>
                                                <option value="DEBUG">Depuração</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>

                                <Modal.Footer className="justify-content-center">
                                    <Button variant="primary" onClick={this.handleSubmit} >
                                        Salvar
                                    </Button>
                                    
                                    <Button variant="light" onClick={this.handleShow}>
                                        Cancelar
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        );
    }
}

export default ErrorHeaderButtons;
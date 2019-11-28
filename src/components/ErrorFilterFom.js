import React from 'react';
import { Form, Col, Card, Button, InputGroup } from 'react-bootstrap';


class ErrorFilterForm extends React.Component {
    constructor(props){ 
        super(props);
    }

    render() {
        return (
            <div>
                <Card>
                    <Form style={{paddingLeft: '10px', paddingRight: '10px'}}>
                        <Form.Row className="mt-3">
                            <Form.Group as={Col} controlId="formGridEnvironment">
                                <Form.Control as="select">
                                    <option value="">Ambiente</option>
                                    <option value="PRODUCAO">Produção</option>
                                    <option value="HOMOLOGACAO">Homologação</option>
                                    <option value="DEVELOPMENT">Dev</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridOrderBy">
                                <Form.Control as="select">
                                    <option value="">Ordenar Por</option>
                                    <option value="level">Level</option>
                                    <option value="frequencia">Frequência</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSearchBy">
                                <Form.Control as="select">
                                    <option value="">Buscar Por</option>
                                    <option value="level">Level</option>
                                    <option value="descricao">Descrição</option>
                                    <option value="origem">Origem</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSearch">
                                <InputGroup>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Digite para buscar..."
                                        aria-label="search"
                                        aria-describedby="search"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary">Buscar</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default ErrorFilterForm;
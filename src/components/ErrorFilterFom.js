import React from 'react';
import { Form, Col, Card, InputGroup } from 'react-bootstrap';


class ErrorFilterForm extends React.Component {
    handleSearch(props, search_content) {
        let search_by = document.getElementById('formGridSearchBy').value;

        if (search_by === 'level') {
            search_content !== '' ? (
                props.onChange(`/searchByLevel?${search_by}=${search_content}`)
            ) : (
                props.onChange('')
            )
        } else if (search_by === 'description') {
            search_content !== '' ? (
                props.onChange(`/searchByDescription?${search_by}=${search_content}`)
            ) : (
                props.onChange('')
            )
        } else if (search_by === 'origin') {
            search_content !== '' ? (
                props.onChange(`/searchByOrigin?${search_by}=${search_content}`)
            ) : (
                props.onChange('')
            )
        }
    }

    handleFilter(props) { 
        let env_value    = document.getElementById('formGridEnvironment').value;
        let order_value  = document.getElementById('formGridOrderBy').value;
        let env_filter   = `env=${env_value}`; 
        let order_filter = `order=${order_value}`;

        if (env_value === '') {
            if (order_value === '') {
                return this.props.onChange('');
            }

            return props.onChange(`/filterOrderBy?${order_filter}`);
        } else {
            if (order_value === '') {
                return props.onChange(`/filterByEnvironment?${env_filter}`);
            }

            return props.onChange(`/filterByEnvironmentOrderBy?${env_filter}&${order_filter}`);
        }
    }

    render() {
        return (
            <div>
                <Card>
                    <Form style={{paddingLeft: '10px', paddingRight: '10px'}}>
                        <Form.Row className="mt-3">
                            <Form.Group as={Col} controlId="formGridEnvironment">
                                <Form.Control 
                                    as="select" 
                                    name="env"
                                    onChange={(e) => 
                                        (this.handleFilter(this.props))}
                                >
                                    <option value="">Ambiente</option>
                                    <option value="PRODUCTION">Produção</option>
                                    <option value="TEST">Homologação</option>
                                    <option value="DEVELOPMENT">Dev</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridOrderBy">
                                <Form.Control 
                                    as="select" 
                                    name="order"
                                    onChange={(e) => 
                                        (this.handleFilter(this.props))}
                                >
                                    <option value="">Ordenar Por</option>
                                    <option value="level">Level</option>
                                    <option value="events">Frequência</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSearchBy">
                                <Form.Control as="select">
                                    <option value="">Buscar Por</option>
                                    <option value="level">Level</option>
                                    <option value="description">Descrição</option>
                                    <option value="origin">Origem</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSearch">
                                <InputGroup>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Digite para buscar..."
                                        aria-label="search"
                                        aria-describedby="search"
                                        onChange={(e) => 
                                            (this.handleSearch(this.props, e.target.value))
                                        }
                                    />
                                    <InputGroup.Append>
                                        <span className="input-group-text">
                                            <i className="material-icons">search</i>
                                        </span>
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
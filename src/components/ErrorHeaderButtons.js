import React from 'react';
import { Row, Col, ButtonToolbar, Button, Jumbotron } from 'react-bootstrap';

const button_min_width = {minWidth: '6rem'}

const ErrorHeaderButtons = () => {
    return (
        <div>
            <Jumbotron style={{backgroundColor: '#e1e1e1', padding: '2rem 2rem'}}>
                <Row>
                    <Col>
                        <ButtonToolbar>
                            <Button variant="secondary" className="mr-5" style={button_min_width}>Arquivar</Button>
                            <Button variant="secondary" style={button_min_width}>Apagar</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
}

export default ErrorHeaderButtons;
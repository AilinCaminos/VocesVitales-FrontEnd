import React from 'react';
import './Filter.scss';
import { Container, Row, Form } from 'react-bootstrap';

const Filter = () => {

    return (
        <Container className="container-filter">
            <Row>            
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`}>
                        <p className="p-checkbox">Por contenido</p>
                        <Form.Check 
                            className="label-checkbox"
                            type={type}
                            id={`default-${type}`}
                            label="Programación"
                        />
                        <Form.Check 
                            className="label-checkbox"
                            type={type}
                            id={`default-${type}`}
                            label="Negocios"
                        />
                        <Form.Check 
                            className="label-checkbox"
                            type={type}
                            id={`default-${type}`}
                            label="Economía"
                        />
                    </div>
                ))}
            </Row>
        </Container>
    );
}

export default Filter;
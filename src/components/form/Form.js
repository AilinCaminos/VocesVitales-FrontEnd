import React, { useState } from 'react';
import './Form.scss';
import { Form, Button } from 'react-bootstrap';

const Formm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
      
    return (
        <Form className="form" noValidate validated={validated} onSubmit={handleSubmit}> 
            <Form.Group controlId="validationCustom01">
                <Form.Label>Ingresar email</Form.Label>
                <Form.Control 
                    className="input-form"
                    required 
                    type="email" 
                    placeholder="Email..." />      
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Debe ingresar un correo válido.</Form.Control.Feedback>
            </Form.Group>
                
            <Form.Group controlId="validationCustom02">
                <Form.Label>¿Cuál es tu pregunta?</Form.Label>
                <Form.Control
                    className="input-form"
                    required
                    type="text"
                    placeholder="Pregunta..." />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">El input no puede quedar vacío.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationCustom03">
                <Form.Label>Descripción de la pregunta</Form.Label>
                <Form.Control 
                    className="textarea-form"
                    as="textarea" 
                    rows={3}
                    required
                    type="text"
                    placeholder="Descripción..." />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Debe por lo menos tener una pequeña descripción.</Form.Control.Feedback>
            </Form.Group>
                   
            <Button
                className="button-form" 
                type="submit">Enviar</Button>
        </Form>
    );
}

export default Formm;

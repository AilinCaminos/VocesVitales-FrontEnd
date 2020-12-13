import React, { useState } from 'react';
import './Form.scss';
import { Form, Button } from 'react-bootstrap';

const FormAnswer = () => {
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
        <Form className="form pb-5" noValidate validated={validated} onSubmit={handleSubmit}> 
            <Form.Group controlId="validationCustom01">
                <Form.Label>Ingresar nombre</Form.Label>
                <Form.Control 
                    className="input-form"
                    required 
                    type="text" 
                    placeholder="Nombre..." />      
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Debe ingresar un nombre.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationCustom03">
                <Form.Label>Respuesta</Form.Label>
                <Form.Control 
                    className="textarea-form" style={{width: "100%"}}
                    as="textarea" 
                    rows={8}
                    required
                    type="text"
                    placeholder="Escriba su respuesta..." />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Debe por lo menos ingresar algún caracter.</Form.Control.Feedback>
            </Form.Group>
                   
            <Button
                className="button-form" 
                type="submit">Enviar</Button>
        </Form>
    );
}

export default FormAnswer;
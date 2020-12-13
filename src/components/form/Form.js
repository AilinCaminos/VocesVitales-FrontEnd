import React, { useState } from 'react';
import './Form.scss';
import { Form, Button } from 'react-bootstrap';
import { QUESTION_ADD } from '../../reducers/Questions';
import { addQuestion } from '../../services/Questions';

const Formm = ({dataQuestionsDispatch}) => {
    const [validated, setValidated] = useState(false);
    const [nombre, setNombre] = useState();
    const [pregunta, setPregunta] = useState();
    const [descripcion, setDescripcion] = useState();

    const nuevoNombre = event => setNombre(event.target.value);
    const nuevaPregunta = event => setPregunta(event.target.value);
    const nuevaDescripcion = event => setDescripcion(event.target.value);

    const agregarPregunta = async () => {
        const addQ = await addQuestion(nombre, pregunta, descripcion);
        dataQuestionsDispatch({type: QUESTION_ADD, addQ});
    };

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
                <Form.Label>Ingresar nombre</Form.Label>
                <Form.Control 
                    className="input-form"
                    required 
                    type="text" 
                    placeholder="Nombre..." 
                    onChange={nuevoNombre}/>      
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Debe ingresar un nombre.</Form.Control.Feedback>
            </Form.Group>
                
            <Form.Group controlId="validationCustom02">
                <Form.Label>¿Cuál es tu pregunta?</Form.Label>
                <Form.Control
                    className="input-form"
                    required
                    type="text"
                    placeholder="Pregunta..."
                    onChange={nuevaPregunta} />
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
                    placeholder="Descripción..."
                    onChange={nuevaDescripcion} />
                <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Debe por lo menos tener una pequeña descripción.</Form.Control.Feedback>
            </Form.Group>
                   
            <Button
                className="button-form" 
                type="submit"
                onClick={agregarPregunta}>Enviar</Button>
        </Form>
    );
}

export default Formm;

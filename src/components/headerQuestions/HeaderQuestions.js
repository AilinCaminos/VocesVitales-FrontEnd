import React, { useState } from 'react';
import './HeaderQuestions.scss';
import { Container, Row, Collapse, Button } from 'react-bootstrap';
import Formm from '../form/Form';
import Filter from '../filter/Filter';

const HeaderQuestions = () => {
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState(false);

    return (
        <Container fluid className="container-header-questions">
            <Row className="row-header-questions"> 
                <h1 className="title-header-questions">Todas las Preguntas</h1>
                <Button
                    className="button-header-questions"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>
                    Hacer una pregunta
                </Button>
            </Row>
            <Collapse in={open}>
                    <div id="example-collapse-text">
                        <Formm />
                    </div>
            </Collapse>
            <Row className="row-header-questions"> 
                <p className="p-header-questions">10,520 Preguntas</p>
                <Button
                    className="button-header-questions"
                    onClick={() => setFilter(!filter)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>
                    Filter
                </Button>
            </Row>
            <Collapse in={filter}>
                    <div id="example-collapse-text">
                        <Filter />
                    </div>
            </Collapse>
        </Container>
    );
}

export default HeaderQuestions;

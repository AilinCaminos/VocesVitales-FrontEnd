import React, { useState, useReducer, useEffect } from 'react';
import './Questions.scss';
import { Container, Row, Collapse, Button } from 'react-bootstrap';
import Formm from '../form/Form';
import Filter from '../filter/Filter';
import ListQuestions from '../listQuestions/ListQuestions';
import { questionsReducer, QUESTION_INIT } from '../../reducers/Questions';
import { getQuestions, } from '../../services/Questions';

const data = [
    {
        question: "¿Qué es la Programación?",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam itaque nihil labore sequi unde incidunt distinctio, consectetur
            laboriosam ex accusamus deleniti molestiae accusantium veritatis aliquid 
            ea fugiat officiis animi repellendus.`, 
        rateQuestion: 5,
        photo: "https://www.gravatar.com/avatar?d=mp", 
        name: "Maria",
        tags: ["Animales", "DD.HH.", "Género", "Igualdad"],
        answers: 4,
    },
    {
        question: "¿Cuáles son las ramas de la Economía?",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam itaque nihil labore sequi unde incidunt distinctio, consectetur
            laboriosam ex accusamus deleniti molestiae accusantium veritatis aliquid 
            ea fugiat officiis animi repellendus.`, 
        rateQuestion: 2,
        photo: "https://www.gravatar.com/avatar?d=mp", 
        name: "Jose",
        tags: [],
        answers: 1,
    },
    {
        question: "¿Cualquier persona puede aprender a hacer Negocios?",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam itaque nihil labore sequi unde incidunt distinctio, consectetur
            laboriosam ex accusamus deleniti molestiae accusantium veritatis aliquid 
            ea fugiat officiis animi repellendus.`, 
        rateQuestion: 0,
        photo: "https://www.gravatar.com/avatar?d=mp", 
        name: "Gabriela Alarcon",
        tags: ["Género", "Igualdad", "Género", "Igualdad", "Género", "Igualdad"],
        answers: 0
    }
];

const Questions = () => {
    const [dataQuestions, dataQuestionsDispatch] = useReducer(questionsReducer, []);
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState(false);

    useEffect(() => {
        const promise = getQuestions();
        promise.then(data => dataQuestionsDispatch({ type: QUESTION_INIT, questions: data }));
    }, []);

    return (
        <div className="questions">
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
                            <Formm dataQuestionsDispatch={dataQuestionsDispatch} />
                        </div>
                </Collapse>
                <Row className="row-header-questions"> 
                    <p className="p-header-questions">{`${dataQuestions.length} Preguntas`}</p>
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

                <ListQuestions dataQuestions={dataQuestions} />
            </Container>
        </div>
    );
}

export default Questions;

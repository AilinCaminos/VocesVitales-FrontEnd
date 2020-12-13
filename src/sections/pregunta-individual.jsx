import React from "react";
import PreguntaDetalle from "../components/cardQuestions/pregunta-detalle";
import "../scss/preguntaIndividual.scss";
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Noticias from './Noticias';
import ListAnswers from '../components/listAnswers/ListAnswers';
import FormAnswer from '../components/form/FormAnswer';
import Footer from '../components/footer/Footer';

const PreguntaIndividual = (props) => {

    return (
        <Container className="container-section-questions">
            <Row className="row-col-section-questions">
                <Col className="row-col-section-questions"><Navbar /></Col>
            </Row>
            <Row className="row-col-section-questions">
                <Col className="row-col-section-questions"><Sidebar /></Col>
                <Col className="row-col-section-questions">
                    <div className="question-answers">
                        <PreguntaDetalle objeto={props.location.selectedQuestion} />
                        <h5 className="pt-3">Respuestas:</h5>
                        <ListAnswers />
                        <h5 className="pt-3 pb-2">Tu respuesta:</h5>
                        <FormAnswer />
                    </div>
                </Col>
                <Col className="row-col-section-questions"><Noticias /></Col>
            </Row>
            <Row className="row-col-section-questions">
                <Col className="row-col-section-questions"><Footer /></Col>
            </Row>
        </Container>
    );
}

export default PreguntaIndividual;
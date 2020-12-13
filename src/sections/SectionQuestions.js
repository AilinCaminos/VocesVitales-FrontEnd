import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Noticias from './Noticias';
import Questions from '../components/questions/Questions';
import Footer from '../components/footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';

const SectionQuestions = () => {
    return (
        <Container className="container-section-questions container">
            <Row className="row-col-section-questions">
                <Col className="row-col-section-questions"><Navbar /></Col>
            </Row>
            <Row className="row-col-section-questions">
                <Col className="row-col-section-questions"><Sidebar /></Col>
                <Col className="row-col-section-questions"><Questions /></Col>
                <Col className="row-col-section-questions"><Noticias /></Col>
            </Row>
            <Row className="row-col-section-questions">
                <Col className="row-col-section-questions"><Footer /></Col>
            </Row>
        </Container>
    );
}

export default SectionQuestions;

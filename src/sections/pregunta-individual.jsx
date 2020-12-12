import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import PreguntaDetalle from "../components/pregunta-detalle";
import Respuesta from "../components/respuesta";
import "../scss/preguntaIndividual.scss";

const PreguntaIndividual = () => {
    return (
        <div id="pregunta-individual" className="container py-4">
            <PreguntaDetalle />
           <Respuesta />
        </div>
    );
};

export default PreguntaIndividual;
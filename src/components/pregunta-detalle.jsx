import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import "../scss/preguntaIndividual.scss";

const PreguntaDetalle = () => {
    
    return (
        <div id="pregunta-detalle" className="container">
            <div className="container border p-3">
                <div className="row">
                    <div className="col-10">
                        <h2>¿Esta es una pregunta?</h2>
                    </div>
                    <div className="col-2 text-right">
                        <button className="primary-button py-2 px-3">
                            Pregunta
                        </button>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-1 d-flex justify-content-center flex-column">
                        <button className="btn btn-primary mb-3">
                            <FontAwesomeIcon className='' icon={faHandPointUp} />
                        </button>
                        <button className="btn btn-primary">
                            <FontAwesomeIcon className='' icon={faHandPointDown} />
                        </button>
                    </div>
                    <div className="col-10">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque nihil
                            labore sequi unde incidunt distinctio, consectetur laboriosam ex accusamus deleniti
                            molestiae accusantium veritatis aliquid ea fugiat officiis animi repellendus.
                        </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-end">
                    <div className="col-8 d-flex flex-wrap align-items-start pt-4">
                        <button type="button" class="secondary-button py-2 px-3 mr-2">Animales</button>
                        <button type="button" class="secondary-button py-2 px-3 mr-2">DD.HH.</button>
                        <button type="button" class="secondary-button py-2 px-3 mr-2">Género</button>
                        <button type="button" class="secondary-button py-2 px-3 mr-2">Igualdad</button>
                    </div>
                    <div className="col-3 pt-4">
                        <div class="user-box card p-2">
                            <div class="row d-flex justify-content-around align-items-center">
                                <div class="col-md-4">
                                    <div className="mentora-img rounded-circle"></div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body pl-0">
                                        <h4 className="card-title m-0">Username</h4>
                                        <p className="card-text">Aprendiz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreguntaDetalle;
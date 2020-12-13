import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import "../scss/preguntaIndividual.scss";

const Respuesta = ({description, rateAnswer, photo, name}) => {
    return (
        <div id="pregunta-detalle" className="container mb-4 mt-4">
            <div className="container pt-4" style={{padding: "0"}}>
                <div className="row">
                    <div className="col-1 d-flex justify-content-center flex-column">
                        <button className="btn btn-primary mb-2 btn-rate">
                            <FontAwesomeIcon className='' icon={faHandPointUp} />
                        </button>
                        <p className="mb-2" style={{textAlign: "center", fontSize: "20px"}}>{rateAnswer}</p>
                        <button className="btn btn-primary btn-rate">
                            <FontAwesomeIcon className='' icon={faHandPointDown} />
                        </button>
                    </div>
                    <div className="col-10 pt-2">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-end">                  
                    <div className="col-12 p-0 container-card-user">
                        <div class="user-box card">
                            <div class="row d-flex  justify-content-around align-items-center" style={{flexWrap: "nowrap"}}>
                                <div class="col-md-4">
                                    <div className="mentora-img rounded-circle">
                                        <img className="img-person" src={photo} alt="persona" />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body pl-0">
                                        <h4 className="card-title m-0">{name}</h4>
                                        <p className="card-text">Mentora</p>
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

export default Respuesta;

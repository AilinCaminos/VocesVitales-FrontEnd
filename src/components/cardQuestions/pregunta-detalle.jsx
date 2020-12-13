import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp, faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import "../../scss/preguntaIndividual.scss";
import { Link } from 'react-router-dom';
import aprendiz from '../../imgs/aprendiz.jpg'

const PreguntaDetalle = ({objeto, info, question, description, name, children}) => {

    return (
        <div id="pregunta-detalle" className="container p-0 m-0 mb-4 mt-4">
            <div className="container container-pregunta-detalle" style={{backgroundColor: "white"}}>
                <div className="row">
                    <div className="col-12 pt-4">
                        <Link className="title-question" to={{
                            pathname: `/pregunta-respuestas`,
                            selectedQuestion: info   
                        }}> 
                        {objeto === undefined ? question : objeto.question}
                        </Link>
                    </div>
                </div>
                <hr></hr>
                <div className="row change">
                    {
                        question ? 
                            <div className="col-2 d-flex justify-content-center flex-column container-votes-answers">
                                {children}
                            </div>  
                        :
                        <div  className="col-1 justify-content-center flex-column">
                            <button className="btn btn-primary mb-2 btn-rate">
                                <FontAwesomeIcon className='' icon={faHandPointUp} />
                            </button>
                            <p className="mb-2" style={{textAlign: "center", fontSize: "20px"}}>0</p>
                            <button className="btn btn-primary btn-rate">
                                <FontAwesomeIcon className='' icon={faHandPointDown} />
                            </button>
                        </div> 
                    }                   
                    <div className="col-11 container-description">
                        <p className="description-question">{objeto === undefined ? description : objeto.description}</p>
                    </div>
                </div>              
                <div className="row d-flex justify-content-end">                  
                    <div className="col-12 p-0 container-card-user">
                        <div class="user-box card">
                            <div class="row d-flex  justify-content-around align-items-center" style={{flexWrap: "nowrap"}}>
                                <div class="col-md-4">
                                    <div className="mentora-img rounded-circle">
                                        <img className="img-person" src={aprendiz} alt="persona" />
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body pl-0">
                                        <h4 className="card-title m-0">{objeto === undefined ? name : objeto.name}</h4>
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
}

export default PreguntaDetalle;

/*
<div className="d-flex flex-wrap btn-tags">
                          

                        {
                            objeto === undefined ? 
                                tags.map(tag => {
                                    return (
                                        <button 
                                            type="button" 
                                            className="secondary-button">
                                            {tag}
                                        </button>
                                    );
                                })
                            :
                                objeto.tags.map(tag => {
                                return (
                                    <button 
                                        type="button" 
                                        className="secondary-button">
                                        {tag}
                                    </button>
                                );
                            })

                        }
                        </div>

                        <img className="img-person" src={objeto === undefined ? photo : objeto.photo} alt="persona" />

*/

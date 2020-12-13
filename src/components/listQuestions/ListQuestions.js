import React from 'react';
import './ListQuestions.scss';
import PreguntaDetalle from '../cardQuestions/pregunta-detalle';

const ListQuestions = ({dataQuestions}) => {

  	return (
		<section className="container-questions">
            {
                dataQuestions.reverse().map(info => {
                    return(
                        <PreguntaDetalle
                            info={info}
                            question={info.titulo}
                            description={info.descripcion}
                            name={info.nombre}>                          
                            
                            <div className="votes-answers">
                                <div className="votes">
                                    <p className="n-votes-answers">0</p>   
                                    <p className="p-votes-answers">Votos</p>  
                                </div>
                                <div className="answers">
                                    <p className="n-votes-answers">0</p>   
                                    <p className="p-votes-answers">Rptas</p> 
                                </div>   
                            </div>
                        </PreguntaDetalle>
                    )
                })
            }
        </section>
  	);
}

export default ListQuestions;

import React from 'react';
import Respuesta from '../respuesta';

const data2 = [
    {
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam itaque nihil labore sequi unde incidunt distinctio, consectetur
            laboriosam ex accusamus`, 
        rateAnswer: 2,
        photo: "https://www.gravatar.com/avatar?d=mp", 
        name: "Maria",
    },
    {
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam itaque nihil labore sequi unde incidunt distinctio, consectetur
            laboriosam ex accusamus deleniti molestiae accusantium veritatis aliquid.`, 
        rateAnswer: 0,
        photo: "https://www.gravatar.com/avatar?d=mp", 
        name: "Jose",
    },
    {
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`, 
        rateAnswer: 10,
        photo: "https://www.gravatar.com/avatar?d=mp", 
        name: "Gabriela Alarcon",
    }
];

const ListAnswers = () => {

  	return (
		<section className="container-questions">
            {
                data2.map(info => {
                    return(
                        <Respuesta
                            description={info.description}
                            rateAnswer={info.rateAnswer}
                            photo={info.photo}
                            name={info.name}>                          
                        </Respuesta>
                    )
                })
            }
        </section>
  	);
}

export default ListAnswers;

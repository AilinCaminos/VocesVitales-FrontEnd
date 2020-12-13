import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SectionQuestions from '../sections/SectionQuestions';
import PreguntaIndividual from '../sections/pregunta-individual';

const Routes = () => {
  	return (
		<Switch>
    		<Route exact path='/' component={SectionQuestions} />
			<Route exact path='/pregunta-respuestas' component={PreguntaIndividual} />
		</Switch>
  	);
}

export default Routes;

// se coloca como path / 
// mientras no estén las pantallas anteriores (login y demás)
// luego se cambia por path preguntas

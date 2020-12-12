import React from 'react';
import './App.scss';
//import Routes from './routes/Routes';
import HeaderQuestions from './components/headerQuestions/HeaderQuestions.js';
import PreguntaIndividual from "./sections/pregunta-individual";

const App = () => {
  	return (
		  <div className='App'>
    		<HeaderQuestions />
        <PreguntaIndividual />
		  </div>
  	);

export default App;

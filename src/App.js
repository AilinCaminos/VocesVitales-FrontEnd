import React from 'react';
import './App.scss';
/*import Routes from './routes/Routes';*/
import PreguntaIndividual from "./sections/pregunta-individual";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
	return (
		<div className='App'>
			<PreguntaIndividual />
		</div>
	);
}

export default App;

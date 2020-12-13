import axios from 'axios';

const apiQuestions = 'https://vvital.herokuapp.com/api/v1/pregunta';

export const getQuestions = async () => {
    try {
        const res = await axios.get(apiQuestions);
        return res.data;
    }catch(err) {
        alert(`Error en traer las preguntas`);
    }
};

export const addQuestion = async (nombre, pregunta, descripcion) => {
    try {
        const addNewQuestion = {
            nombre: nombre,
            titulo: pregunta,
            descripcion: descripcion
        };
        const res = await axios.post(apiQuestions, addNewQuestion);
        return res.data;
    }catch(err) {
        alert(`Error al agregar una nueva pregunta`);
    }
};

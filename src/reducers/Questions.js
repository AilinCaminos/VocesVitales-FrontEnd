export const QUESTION_INIT = "QUESTION_INIT";
export const QUESTION_ADD = "QUESTION_ADD";

export const questionsReducer = (state, action) => {
    switch (action.type) {
        case QUESTION_INIT: 
			return action.questions;
		case QUESTION_ADD:
			return [...state, action.addQ];
      	default:
        	return state;
    };
}

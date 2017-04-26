import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			//Concat (ES6 Syntax) makes a new array but with the old stuff
			//DONT MUTATE STATE, RETURN NEW STATE;
			return [ action.payload.data, ...state];
	}


	return state;
}
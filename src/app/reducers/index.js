import { SHOW_SKILLSETS, HIDE_SKILLSETS, LOAD_RESUME_FAILED, LOAD_RESUME_SUCCESS } from '../actions.js';
import { Map } from 'immutable';

const initialState = Map({
	skillsets: {},
	display_skillsets: true,
	notification: {
		type: null,
		message: null
	}
});

export default function resume(state = initialState, action)
{
	switch(action.type) {
		case SHOW_SKILLSETS:
			return state.set('display_skillsets', true);
		case HIDE_SKILLSETS: 
			return state.set('display_skillsets', false);
		case LOAD_RESUME_FAILED:
			return state.set('notification', {
				type: "error",
				message: action.payload.message
			});
		case LOAD_RESUME_SUCCESS:
			return state.set('skillsets', action.payload.skillsets);
		default:
			return state;
	}
}

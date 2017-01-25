import { SHOW_SKILLSETS, HIDE_SKILLSETS } from '../actions.js';

const initialState = {
	skillsets: {},
	display_skillsets: true
};

export default function resume(state = initialState, action)
{
	switch(action.type) {
		case SHOW_SKILLSETS:
			return {
				skillsets: state.skillsets,
				display_skillsets: true
			};
		case HIDE_SKILLSETS: 
			return {
				skillsets: state.skillsets,
				display_skillsets: false
			};
		default:
			return state;
	}
}

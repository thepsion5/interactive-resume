import { SHOW_SKILLSETS, HIDE_SKILLSETS, LOAD_RESUME_FAILED } from '../actions.js';

const initialState = {
	skillsets: {},
};

export default function resume(state = initialState, action)
{
	switch(action.type) {
		case SHOW_SKILLSETS:
			return {
				skillsets: state.skillsets,
				display_skillsets: true,
				notification: state.notification
			};
		case HIDE_SKILLSETS: 
			return {
				skillsets: state.skillsets,
				display_skillsets: false,
				notification: state.notification
			};
		default:
			return state;
	}
}

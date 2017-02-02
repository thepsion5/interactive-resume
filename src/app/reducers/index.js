import { SHOW_SKILLSETS, HIDE_SKILLSETS, LOAD_RESUME_FAILED, LOAD_RESUME_SUCCESS } from '../actions.js';

const initialState = {
	skillsets: {},
	display_skillsets: true,
	notification: {
		type: null,
		message: null
	}
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
		case LOAD_RESUME_FAILED:
			return {
				skillsets: state.skillsets,
				display_skillsets: false,
				notification: {
					type: "error",
					message: action.payload.message
				}
			}
		case LOAD_RESUME_SUCCESS:
			return {
				skillsets: action.payload.skillsets,
				display_skillsets: state.display_skillsets,
				notification: state.notification
			}
		default:
			return state;
	}
}

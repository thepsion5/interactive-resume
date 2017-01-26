import { SHOW_SKILLSETS, HIDE_SKILLSETS } from '../actions.js';

const initialState = {
	skillsets: {
		"Languages" : {
			"Javascript": {
				"years" : 12,
				"proficiency" : 0.7
			},
			"PHP": {
				"years" : 12,
				"proficiency" : 0.9
			},
			"SQL": {
				"years" : 10,
				"proficiency" : 0.5
			}
		},
		"Frameworks" : {
			"Laravel" : {
				"years" : 5,
				"proficiency" : 0.9
			},
			"jQuery" : {
				"years" : 8,
				"proficiency" : 0.8
			}
		}
	},
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

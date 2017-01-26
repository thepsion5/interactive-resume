import { CALL_API } from './middlewares/api.js';

export const GENERIC_API_REQUEST = 'api';
export const LOAD_RESUME = 'resume.load';
export const LOAD_RESUME_SUCCESS = 'resume.load.success';
export const LOAD_RESUME_FAILED = 'resume.load.failed';

export const SHOW_SKILLSETS = 'skillsets.show';
export const HIDE_SKILLSETS = 'skillsets.hide';

export function showSkillsets()
{
	return {
		type: SHOW_SKILLSETS
	};
}

export function hideSkillsets()
{
	return {
		type: HIDE_SKILLSETS
	};
}
 
export function loadResume()
{
 	return {
 		type: GENERIC_API_REQUEST,
 		meta: {
 			CALL_API: {
 				method: 'get',
 				path: './resume-data.json',
 				sendingType: LOAD_RESUME,
 				successType: LOAD_RESUME_SUCCESS,
 				failureType: LOAD_RESUME_FAILED
 			}
 		}
 	}
}

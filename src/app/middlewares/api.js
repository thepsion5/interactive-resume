import superAgent from 'superagent';

export const CALL_API = 'CALL_API';


export default store => next => action => {

	let isApiCall = action.meta ? action.meta[CALL_API] : null;
	if(!isApiCall) {
		return next(action);
	}
	let request = action[CALL_API];
	let { method, path, sendingType, failureType, successType } = action.meta[CALL_API];
	let { dispatch } = store;

	dispatch({ type: sendingType });

	superAgent[method](path)
		.end( (error, response) => {
			if(error) {
				dispatch({
					type: failureType,
					payload: error,
					error: true
				});
			} else {
				dispatch({
					type: successType,
					payload: response,
				});
			}
		});
}
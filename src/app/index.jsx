import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/App.jsx';
import reducer from './reducers';

import Api from './middlewares/api.js';

const store = createStore(reducer, applyMiddleware(Api));

require("./stylesheet.css");

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
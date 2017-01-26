import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App.jsx';
import reducer from './reducers';

const store = createStore(reducer);

require("./stylesheet.css");

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
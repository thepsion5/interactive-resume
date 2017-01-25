import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ResumeActions from '../actions.js';

class App extends Component{
	render() {
		return (<p>This will eventually be interactive</p>);
	}
};

//TODO: define property types


function mapStateToProps(state)
{
	return {
		skillsets: state.skillsets
	};
}

function mapDispatchToProps(dispatch)
{
	return {
		actions: bindActionCreators(ResumeActions, dispatch)
	};
}


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
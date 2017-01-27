import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ResumeActions from '../actions.js';
import SkillsetList from '../components/SkillsetList.jsx';
import NotificationBar from '../components/NotificationBar.jsx';

class App extends Component
{
	static propTypes = {
		actions: PropTypes.object.isRequired,
		skillsets: PropTypes.object.isRequired,
		display_skillsets: PropTypes.bool.isRequired
	}

	componentDidMount()
	{
		this.props.actions.loadResume();
	}

	render() {
		return (
			<div id="interactive-resume" className="row">
				<NotificationBar
					type={ this.props.notification.type }
					message={ this.props.notification.message } />
				<SkillsetList
					actions={ this.props.actions }
					skillsets={ this.props.skillsets }
					display={ this.props.display_skillsets } />
			</div>
		);
	}
};

//TODO: define property types


function mapStateToProps(state)
{
	return {
		skillsets: state.skillsets,
		display_skillsets: state.display_skillsets,
		notification: {
			type: state.notification.type,
			message: state.notification.message
		}
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
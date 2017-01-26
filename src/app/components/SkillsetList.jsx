import React, {Component, PropTypes} from 'react';
import Skillset from './Skillset.jsx';

export default class SkillsetList extends Component
{

	static propTypes = {
		actions: PropTypes.object.isRequired,
		skillsets: PropTypes.object.isRequired,
		display: PropTypes.bool.isRequired
	}

	handleToggleSkillsets = () => {
		if(this.props.display) {
			this.props.actions.hideSkillsets();
		} else {
			this.props.actions.showSkillsets();
		}
	}

	render() {
		return (
			<div id="skillset-list" className="col-sm-6">
			<h2>Skills</h2>
				{ this.renderControls() }
				{ this.renderList() }
			</div>
		);
	}

	renderControls()
	{
		return (
			<div id="skillset-controls">
				<button className="btn btn-primary btn-xs" onClick={ this.handleToggleSkillsets }>
					{ this.props.display ? 'Hide Skillsets' : 'Show Skillsets' }
				</button>
			</div>
		);
	}

	renderList()
	{
		if(!this.props.display) {
			return null;
		}

		return Object.keys(this.props.skillsets).map(function(skillsetName, index) {
			return (
				<Skillset skillset_name={skillsetName} skills={this.props.skillsets[skillsetName]} key={index} />
			);
		}, this);
	}
}

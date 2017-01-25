import React, {Component, PropTypes} from 'react';
import Skillset from './Skillset.jsx';

export default class SkillsetList extends Component
{

	static propTypes = {

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
			<div id="skillsets">
				{ this.renderControls() }
				{ this.renderList() }
			</div>
		);
	}

	renderControls()
	{
		return (
			<div className="skillset-controls">
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

		return (
			<ul id="skillset-list">
				<li>Skillset List Placeholder</li>
			</ul>
		);
	}
}

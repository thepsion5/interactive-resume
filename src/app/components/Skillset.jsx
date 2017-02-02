import React, { PropTypes, Component } from 'react';

export default class Skillset extends Component
{
	static propTypes = {
		skills: PropTypes.object,
		skillset_name: PropTypes.string
	};

	render()
	{
		return (
			<div>
				<h3>{ this.props.skillset_name }</h3>
				<ul className="skills list-unstyled">
					{ this.renderSkills() }
				</ul>
			</div>
		);
	}

	renderSkills()
	{
		let skillNames = Object.keys(this.props.skills);
		return skillNames.map( function(skillName, index) {

			let yearsLabel = this.props.skills[skillName].years != 1 ? 'years' : 'year';
			return (
				<li key={index}>
					<strong>{ skillName }</strong>&nbsp;
					<small>{ this.props.skills[skillName].years } { yearsLabel }</small>
					{ this.renderProficiencyIndicator(this.props.skills[skillName]) }
				</li>
			);
		}, this);
	}

	renderProficiencyIndicator(skill)
	{
		let proficiency = parseInt(skill.proficiency*10);
		if(Number.isNaN(proficiency)) {
			return(
				<span className="proficiency-container pull-right unknown-proficiency" title="Proficiency: UNKNOWN">??????????</span>
			);
		}
		return (
			<span className="proficiency-container pull-right" title={"Proficiency: " + proficiency + "/10"}>
				<span className="proficiency-filled">{String.fromCharCode(8226).repeat(proficiency)}</span>
				<span className="proficiency-empty">{String.fromCharCode(8226).repeat(10-proficiency)}</span>
			</span>
		);
	}
}

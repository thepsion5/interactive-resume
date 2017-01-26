import React from 'react';

export default class Skillset extends React.Component
{
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
			return (
				<li key={index}>
					<strong>{ skillName }</strong>&nbsp;
					<small>{ this.props.skills[skillName].years } years</small>
					{ this.renderProficiencyIndicator(this.props.skills[skillName]) }
				</li>
			);
		}, this);
	}

	renderProficiencyIndicator(skill)
	{
		let proficiency = parseInt(skill.proficiency*10);
		return (
			<span className="proficiency-container pull-right">
				<span className="proficiency-filled">{String.fromCharCode(8226).repeat(proficiency)}</span>
				<span className="proficiency-empty">{String.fromCharCode(8226).repeat(10-proficiency)}</span>
			</span>
		);
	}
}

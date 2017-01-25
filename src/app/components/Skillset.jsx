import React from 'react';

export default class Skillset extends React.Component
{
	render()
	{
		return (
			<div>
				<h3>{ this.props.skillset_name }</h3>
				<ul className="skills">
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
					<strong>{ skillName }</strong>
					<em>{ this.props.skills[skillName].years } years</em>
					{ this.renderProficiencyIndicator(this.props.skills[skillName]) }
				</li>
			);
		}, this);
	}

	renderProficiencyIndicator(skill)
	{
		let proficiency = parseInt(skill.proficiency*10);
		return (
			<span>
				<span className="proficiency-filled">{String.fromCharCode(8226).repeat(skill.proficiency)}</span>
            	<span className="proficiency-empty">{String.fromCharCode(8226).repeat(10-skill.proficiency)}</span>
        	</span>
        );
	}
}

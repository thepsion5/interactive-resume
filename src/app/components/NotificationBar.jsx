import React, { PropTypes, Component} from 'react';


export default class NotificationBar extends Component
{

	render() {
		if(!this.props.type) {
			return null;
		}

		const notificationCssClass = this.props.type == "error" ? "danger" : this.props.type;
		const notificationLabel = this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1);

		return (
			<div className={ "alert alert-" + notificationCssClass }>
				<strong>{ notificationLabel }:</strong>&nbsp;
				{ this.props.message }
			</div>
		);
	}
}

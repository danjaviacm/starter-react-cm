import React, { Component } from 'react'

// Needed components here

export default class NotFound extends Component {

	constructor ( props, context ) {

		super( props )

		this.state = {}

	}

	render() {
		return (
			<div>
				<h1>404 Not Found.</h1>
			</div>
		);
	}
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
}

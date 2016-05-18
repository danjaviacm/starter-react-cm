import React, { Component } from 'react'

// Needed components here

export default class HelloWorld extends Component {

	constructor ( props, context ) {

		super( props )

		this.state = {}

	}

	render() {
		return (
			<div>
				Hello World with ReactJS
			</div>
		);
	}
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
}

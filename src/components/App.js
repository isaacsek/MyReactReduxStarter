import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Welcome from "./Welcome";

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact={true} path="/" component={Welcome} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);

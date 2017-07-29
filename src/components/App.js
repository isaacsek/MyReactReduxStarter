import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";

const Header1 = () => <h2>Header1</h2>;
const Header2 = () => <h2>Header2</h2>;
const Header3 = () => <h2>Header3</h2>;
const Header4 = () => <h2>Header4</h2>;

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
						<Route exact={true} path="/" component={Header2} />
						<Route exact={true} path="/header2" component={Header2} />
						<Route exact={true} path="/header2/header3" component={Header3} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);

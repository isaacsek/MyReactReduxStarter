import React, { Component } from "react";
import {connect} from 'react-redux';

// Landing page for the WebApp
class Welcome extends Component {
	render() {
    console.log(this.props.combinedReducer);
		return (
			<div className="center-align">
				<h3>Welcome to the react-redux starter pack!</h3>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    combinedReducer: state.sample
  };
}

export default connect(mapStateToProps)(Welcome);

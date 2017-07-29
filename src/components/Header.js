import React, { Component } from "react";
import {connect} from 'react-redux';

class Header extends Component {
	render() {
    console.log(this.props.combinedReducer);
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="left brand-logo">MyApp</a>
					<ul className="right">
						<li>
							<a>Login</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
  return {
    combinedReducer: state.sample
  };
}

export default connect(mapStateToProps)(Header);

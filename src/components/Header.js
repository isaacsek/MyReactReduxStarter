import React, { Component } from "react";
import {connect} from 'react-redux';

class Header extends Component {
	render() {
    console.log(this.props.combinedReducer);
		return (
			<nav>
				<div className="nav-wrapper  blue darken-2">
					<a className="brand-logo ml-2">MyApp</a>
					<ul className="right">
						<li><a href="">Projects</a></li>
						<li><a href="">About</a></li>
		        <li><a href="">Contact</a></li>
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

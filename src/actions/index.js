import axios from "axios";
import { FETCH_DATA } from "./types";

// Redux Functions, available to every smart component by including in mapStateToProps
export const fetchData = () => {
	// redux thunk gives access to dispatch
	return async function(dispatch) {
		const res = await axios.get("http://reduxblog.herokuapp.com/api/posts");
		// payload can be "hello"

	// after recieving, dispatch data through reducers with type, and payload
    dispatch({type: FETCH_DATA, payload: res.data});
	};
};

// Simple action function with hard-coded data
export function loadTestData() {
	return {
		type: "TEST_DATA",
		payload: "This is test data."
	};
};

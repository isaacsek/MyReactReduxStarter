import axios from "axios";
import { FETCH_DATA } from "./types";

export const fetchUser = () => {
	// redux thunk gives access to dispatch
	return async function(dispatch) {
		const res = await axios.get("http://reduxblog.herokuapp.com/api/posts");
		// payload can be "hello"
    dispatch({type: FETCH_DATA, payload: res.data});
	};
};

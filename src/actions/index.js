import axios from "axios";
import { FETCH_USER } from "./types";

//  const fetchUser1 = () =>{
//    axios.get('api.openweathermap.org/data/2.5/weather?id=2172797');
//
//    return {
//      type: FETCH_USER,
//      payload: "hello"
//    };
// };

export const fetchUser = () => {
	// redux thunk gives access to dispatch
	return async function(dispatch) {
		const res = await axios.get("http://reduxblog.herokuapp.com/api/posts");
    dispatch({type: FETCH_USER, payload: res.data});
	};
};

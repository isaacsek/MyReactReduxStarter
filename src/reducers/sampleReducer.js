import { FETCH_DATA } from "../actions/types";

// Sample reducer
export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_DATA:
          return {...state, data: action.payload}
        default:
            return state;
    }
}

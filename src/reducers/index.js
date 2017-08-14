import {combineReducers} from 'redux';
import sampleReducer from "./sampleReducer";

// Main reducer component that is exported
export default combineReducers({
    sample: sampleReducer
});

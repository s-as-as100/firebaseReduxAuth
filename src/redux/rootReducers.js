import {combineReducers} from "redux";
import userReducer from "./reducer";

const rootReducer =combineReducers({
    // user is key to access the state 
    user:userReducer
})

export default rootReducer;
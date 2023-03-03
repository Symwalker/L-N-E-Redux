import { combineReducers } from "redux";
import counterReducer from "./inc_dec"
const rootReducer =combineReducers({
    counterReducer
})

export default rootReducer
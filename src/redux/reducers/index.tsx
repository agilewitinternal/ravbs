import { combineReducers } from "redux";
import Global from "./GlobalReducer"


const appReducer = combineReducers({
    global: Global
});

export default appReducer
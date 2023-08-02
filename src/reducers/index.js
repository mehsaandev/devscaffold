import { createStore, applyMiddleware, compose,combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import projects from "./projects";
const reducers =  combineReducers({
    projects
    
})




const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));

export default store

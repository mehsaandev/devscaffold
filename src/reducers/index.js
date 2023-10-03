import { createStore, applyMiddleware, compose,combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import projects from "./projects";
import pageDesign from "./pageDesign";
const reducers =  combineReducers({
    projects,pageDesign
    
})




const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));

export default store

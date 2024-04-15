import { createStore, applyMiddleware, compose,combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import projects from "./projects";
import pageDesign from "./pageDesign";
import page from "./page";
const reducers =  combineReducers({
    projects,page,pageDesign
    
})




const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));

export default store

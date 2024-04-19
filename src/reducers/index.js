import { createStore, applyMiddleware, compose,combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import projects from "./projects";
import pageDesign from "./pageDesign";
import page from "./page";
import route from "./routes";
import user from "./user";
const reducers =  combineReducers({
    projects,page,pageDesign,route,user
    
})




const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));

export default store

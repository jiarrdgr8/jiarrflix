import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer.js";



const reducers = combineReducers({
    allMovies: movieReducer
})

export default reducers;
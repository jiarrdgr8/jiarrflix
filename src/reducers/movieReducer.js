import { ActionTypes } from "../constants/actionTypes.js";

const initialState = {
    movies: []
}

export const movieReducer = (state=initialState, {type, payload})=> {
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return state;
        default:
            return state;
    }
}
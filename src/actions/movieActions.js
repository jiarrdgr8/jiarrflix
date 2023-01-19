import {ActionTypes} from '../constants/actionTypes.js'


export const setMovies = (movies)=>{
    return {
        type: ActionTypes.SET_MOVIES,
        payload: movies
    }
}

export const selectedMovie = (movie)=>{
    return {
        type: ActionTypes.SELECTED_MOVIE,
        payload: movie,
    }
}
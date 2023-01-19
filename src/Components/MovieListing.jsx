// import React, { useEffect } from "react";
// import axios from "axios";
// import MovieComponent from "./MovieComponent";
// import { useDispatch, useSelector } from "react-redux";
// import { setMovies } from '../actions/movieActions.js'
// // import { useSelector } from "react-redux";

// const api_key = '&api_key=b0d1cebc1f459ea525c7e78eea9e22b1'
// const base_url = 'https://api.themoviedb.org/3'
// const desc = '/movie/popular?language=en-US&page=1'
// const url = base_url + desc + api_key

// const MovieListing = () => {
//     // const [movies, setMovies] = useState([])
//     const movies = useSelector((state)=> state)
//     console.log((movies));
//     const dispatch = useDispatch()
 
//     const fetchMovies = async ()=>{
//         const response = await axios
//             .get(url)
//             .catch(err => console.log('Error:', err))
//             // .catch(res => {
//             //     // console.log(res.data.results)
//             //     setMovies(res.data.results)
//             // })
//         dispatch(setMovies(response.data))
//     }

//     useEffect(()=>{
//         fetchMovies()
//     }, [])
//     console.log('Movies:', movies);
//     return (
//         <div className='container text-center'>
//             <MovieComponent />
//         </div>
//     );
// }

// export default MovieListing;
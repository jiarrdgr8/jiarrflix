import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const api_key = '&api_key=b0d1cebc1f459ea525c7e78eea9e22b1'
const base_url = 'https://api.themoviedb.org/3'
const desc = '/movie/popular?language=en-US&page=1'
const url = base_url + desc + api_key

const MovieListing = () => {
    const movies = useSelector((state) => state.allMovies.movies);
    // const { id, title } = movies;
    const [url_set, setUrl] = useState(url)
    console.log(url_set);

    // const fetchMovies = async () => {
        
    // console.log(response);     
    
    useEffect(()=>{
        axios.get(url_set)
            .then(res => {
                setUrl(res.data.results)
                // setLoading(false)
            })
            .catch(err => console.log('Error:', err))
    }, [])


    return (
        <div className='container text-center'>
            <h1>{movies.title}</h1>
        </div>

    )
}

export default MovieListing;
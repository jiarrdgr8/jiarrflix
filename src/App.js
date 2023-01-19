import React from 'react';
import NavBar from './Components/NavBar';
import FetchingData from './Components/FetchingData';
import MovieDetails from './Components/MovieDetails';
import MovieCarousel from './Components/MovieCarousel.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='container text-center'>
        <Router>
          <NavBar />
          <FetchingData />
          <Routes>
            <Route path='/' element={<MovieCarousel />} />
            <Route path='/movie/:ID' element={<MovieDetails/>} />
            <Route>404 Not Found!</Route>
          </Routes>
          {/* <MovieListing /> */}
        </Router>
      </div>
    </>
  );
}

export default App;

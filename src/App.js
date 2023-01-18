import React from 'react';
import NavBar from './Components/NavBar';
import MovieListing from './Components/MovieListing';
import MovieDetails from './Components/MovieDetails';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='container text-center'>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<MovieListing/>} />
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

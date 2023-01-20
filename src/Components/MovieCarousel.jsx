import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';

const backdrop_base_url = 'https://image.tmdb.org/t/p/w500'
const MovieCarousel = () => {

  const movies = useSelector((state)=> state.allMovies.movies.results)
  console.log(movies);
  if (!Array.isArray(movies)) {
    return <div>Loading...</div>;
  }

  return (
    <Carousel variant="dark" className='container text-center col-sm-12'>
      {movies.map((movie)=>{
        const { id, title, overview, backdrop_path } = movie;
        const backdrop_url = backdrop_base_url + backdrop_path
        return (
          <Carousel.Item key={id}>
          <img
            className="d-block w-100"
            src = {backdrop_url}
            alt={`Movie ${id}`}
          />
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>{overview}</p>
          </Carousel.Caption>
      </Carousel.Item>
        )})}
    </Carousel>
    )
  }


export default MovieCarousel;

 //   //   <Carousel>
  //   //   <Carousel.Item>
  //   //     <img
  //   //       className="d-block w-100"
  //   //       src="holder.js/800x400?text=First slide&bg=373940"
  //   //       alt="First slide"
  //   //     />
  //   //     <Carousel.Caption>
  //   //       <h3>First slide label</h3>
  //   //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //   //     </Carousel.Caption>
  //   //   </Carousel.Item>
  //   //   <Carousel.Item>
  //   //     <img
  //   //       className="d-block w-100"
  //   //       src="holder.js/800x400?text=Second slide&bg=282c34"
  //   //       alt="Second slide"
  //   //     />
  //   //     <Carousel.Caption>
  //   //       <h3>Second slide label</h3>
  //   //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //   //     </Carousel.Caption>
  //   //   </Carousel.Item>
  //   // </Carousel>
  //   <div>
  //     <h1>{movie.title}</h1>
  //   </div>
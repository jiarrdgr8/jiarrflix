import Carousel from 'react-bootstrap/Carousel';
import FetchingData from './FetchingData';
import { useSelector } from 'react-redux';



const MovieCarousel = () => {

  const movies = useSelector((state)=> state.allMovies.movies.results)
  console.log(movies);

  const RenderList = movies.map((movie)=>{
    const { id, title, vote_average } = movie;
    return (
      <div>
        <h1>{id}</h1>
        <h1>{title}</h1>
        <h1>{vote_average}</h1>
      </div>
    )
  })
  return <RenderList/>
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
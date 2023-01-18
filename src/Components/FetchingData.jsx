
import React, { useEffect, useState, useContext } from "react";


const api_key = '&api_key=b0d1cebc1f459ea525c7e78eea9e22b1'
const base_url = 'https://api.themoviedb.org/3'
const desc = '/movie/popular?language=en-US&page=1'
const url = base_url + desc + api_key ;
// console.log(url);

const PersonContext = React.createContext();

const MovieData = ({children}) => {
    const [data, setData] = useState([])
    const [url_set, setUrl] = useState(url)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(url_set)
            .then(res => res.json())
            .then(data => {
                // console.log(data.results)
                setData(data.results)
                setLoading(false)
            })
            // .then(console.log(setData))
            .catch(err => console.log('Error:', err))
    }, [])
    
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
    <PersonContext.Provider value={data}>
        {children}
    </PersonContext.Provider>
  )
}

const BootstrapCarousel = () => {
    console.log(useContext(PersonContext));
//   console.log(mobies);

  return (
    <div className='item'>
      <h4>aasdasdasd</h4>
    </div>
  );
};

const Something = () => (
  <MovieData>
    <BootstrapCarousel />
  </MovieData>
);

export default Something

// export default BootstrapCarousel;
import { useState, useEffect } from "react";
import "./App.css"
import Movie from "./Movie";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const url = "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"  
  const getMovies = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setMovies(json.data.movies || []);
    setIsLoading(false);
    // console.log(json.data.movies);
    setMovies(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {/* <h1>Movies 🎬</h1> */}
      <div className="container">
      {isLoading ? 
      <div className="loader">
        <span className="loader_text">Loading ...</span>
      </div> :        
        <div className="movies">
          {movies.map((movie) => 
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              poster={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
            />)}
        </div>
      }
      </div>
    </>
  )
}

export default App;

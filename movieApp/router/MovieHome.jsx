import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "../src/components/Movie";

const MovieHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=year");  //minimum_rating=8.5&
    const json = await response.json();
    setMovies(json.data.movies || []);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);


  return (
    <>
      <h1>Movie App 🎬</h1>
      {/* <Link to="/detailMovie/60929">MovieDetail</Link> */}
      {isLoading ? "로딩중..." :        
        <div>
          {movies.map((movie) => 
            <Movie
              key={movie.id}
              id={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movies.genres}
            />)}
        </div>
      }
    </>
  )
}

export default MovieHome;
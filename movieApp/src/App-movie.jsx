import { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie";
// import { json, response } from 'express';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // console.log(isLoading, setIsLoading);
  const getMovies = async () => {    //= async function getMovies() {}
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies || []);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []); //[]이 비어있으면 mount될 때만 실행(새로고침 할때만 불러오기)
  // console.log(movies);

  return (
    <>
      <h1>Movie App 🎬</h1>
      {isLoading ? "로딩중..." :        
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movies.genres}
            />))}
        </div>
      }
    </>
  );
}

export default App;

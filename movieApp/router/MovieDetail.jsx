import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Cast from "../src/components/Cast"
import './MovieDetail.css'

const MovieDetail = () => {
  let [movie, setMovie] = useState({});
  let { id } = useParams();
  console.log(id);
  let url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;
  const getMovie = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <h1>MovieDetail.jsx 🎥</h1>
      <h2>{movie.title}</h2>
      <div>
        <img src={movie.large_cover_image} alt="large_cover_image" />
        <div>좋아요: {movie.like_count}</div>
        <div>평점: {movie.rating}</div>
        <ul className="cast-container">
          {Array.isArray(movie.cast)
            ? movie.cast.map((ch, index) => (
                <Cast
                  key={index}
                  coverImage={ch.url_small_image}
                  name={ch.name}
                  characterName={ch.character_name}
                />
              ))
            : null}
        </ul>
      </div>
    </>
  );
};

export default MovieDetail;

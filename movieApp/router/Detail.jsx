import { useEffect } from "react";

const Detail = () => {
  const getMovieInfo = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/movie_details.json?movie_id=60929&with_images=true&with_cast=true"
    );
    const json = response.json();
    console.log(json);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);


  return (
    <>
      <h1>Movie Detail 🎥</h1>
      <h2>Detail.jsx</h2>
      {/* {isLoading ? "로딩중..." :        
        <div>
          {movies.map((movie) => 
            <Movie
              key={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movies.genres}
            />)}
        </div>
      } */}
      
    </>
  )
}

export default Detail;
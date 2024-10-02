import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({coverImage, title, summary, genres}) {

  return (
      <div className="movie">
        <img src={coverImage} alt="cover_image" />
        <h2><Link to={`/detailMovie/${id}`}>{title}</Link></h2>
        <p>{summary}</p>
        <ul>
          {/* 첫 턴에 데이터가 들어오지 않아 undefined로 정의되어 오류 발생 */}
          {/* &&를 써서 해결 */}
          {genres && genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
      </div>
  )
}

Movie.prototype = {
  coverImage : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
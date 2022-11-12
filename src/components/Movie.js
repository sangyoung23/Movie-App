import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, year, genres, rating }) {
  return (
    <div className="movie">
      <Link to={`/movie/${id}`}>
        <img className="movie__img" src={coverImg} alt={title} />
      </Link>
      <div>
        <h2 className="movie__title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h4>{year}</h4>
        <ul className="movie__genres">
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <h4>{`⭐️ ${rating}`}</h4>
      </div>
    </div>
  );
}

export default Movie;

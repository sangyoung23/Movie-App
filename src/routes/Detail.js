import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function Detail() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovies(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="Detail">
      <Header />
      <div className="Detail_movies_box">
        <img src={movies.large_cover_image}></img>
        <div className="detail_movies_inf">
          <h2>{movies.title}</h2>
          <h3>Genres</h3>
          <ul>
            <li>{movies.genres}</li>
          </ul>
          <h3>{`Year (${movies.year})`}</h3>
          <h4>{`Rating ⭐️ ${movies.rating}`}</h4>
        </div>
      </div>
    </div>
  );
}

export default Detail;

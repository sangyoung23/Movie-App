import { useEffect, useState } from "react";

import Header from "../components/Header";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";
import { useCallback } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterTitle = movies.filter((p) => {
    return p.title
      .replace(" ", "")
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase().replace(" ", ""));
  });

  const moviesLength = () => {
    if (search === "") {
      return;
    } else if (filterTitle.length >= 1) {
      return (
        <span>
          Find <b>{filterTitle.length}</b> Movies
        </span>
      );
    } else {
      return <span>No movies found</span>;
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <Header />
          <SearchBar search={search} handleSearch={handleSearch} />
          <div className="search_movie">{moviesLength()}</div>
          <div className="movies">
            {filterTitle.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;

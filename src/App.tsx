import React, { useEffect, useState } from "react";
import { fetchData, movie } from "./services/api";
const App = () => {
  const [movies, setMovies] = useState<movie[]>([]);
  useEffect(() => {
    fetchData("/movie/popular").then((res) => setMovies(res.data.results));
  }, []);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default App;

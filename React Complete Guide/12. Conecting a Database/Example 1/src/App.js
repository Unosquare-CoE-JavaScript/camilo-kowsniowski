import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  // utilizamos un useState para manejar los datos
  const [movies, setMovies] = useState([]);
  //  estado para manejar el spinner
  const [isLoading, setIsLoading] = useState(false);
  //  estado para manejar errores
  const [error, setError] = useState(null);

  /* LLammada a una API
  1. se puede usar axios o fetch
  2. para evitar el uso de then utilizamos la asycn */

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    // para manejar el error en async usamos el trycatch
    try {
      // usamos la funcion fetch y colocamos al url
      // esto retorna una promesa y la convertimos en .json
      const response = await fetch(
        "https://starwars-267f0-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something WENT WRONG");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://starwars-267f0-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}
export default App;

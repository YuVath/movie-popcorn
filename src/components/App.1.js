import { useEffect, useState } from "react";
import {
  KEY,
  NavBar,
  Logo,
  Search,
  NumResults,
  Main,
  Box,
  Loader,
  MoviesList,
  ErrorMessage,
  WatchedSummery,
  WatchedMoviesList,
} from "./App";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=matrix`)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  useEffect(function () {
    console.log("After Initial Render");
  }, []);

  useEffect(function () {
    console.log("After Every Render");
  });

  useEffect(
    function () {
      console.log("D");
    },
    [query]
  );

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);

          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();

          console.log(data.Response, "Ahoooo");
          if (data.Response) throw new Error("Movie not Found");
          console.log(data.Response, "UWU");

          setMovies(data.Search);
          console.log(data);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MoviesList movies={movies} />} */}

          {isLoading && <Loader />}
          {!isLoading && !error && <MoviesList movies={movies} />}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          <WatchedSummery watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}

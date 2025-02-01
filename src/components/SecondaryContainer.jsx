import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  return (
    <div className="bg-black pb-10 px-8">
      <div className="-mt-64 relative z-20">
        {" "}
        <MovieList title="Now Playing" movies={nowPlayingMovies} />{" "}
      </div>
      <MovieList title="Popular" movies={popularMovies} />
      <MovieList title="Top Rated" movies={topRatedMovies} />
      <MovieList title="Upcoming" movies={upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;

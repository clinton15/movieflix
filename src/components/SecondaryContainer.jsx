import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useTranslation } from "react-i18next";

const SecondaryContainer = () => {
  const { t } = useTranslation();
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  return (
    <div className="bg-black pb-10 px-8">
      {nowPlayingMovies && <div className="mt-0 md:-mt-16 lg:-mt-56 relative z-20">
        {" "}
        <MovieList title={t("browse.nowPlaying")} movies={nowPlayingMovies} />{" "}
      </div>}
      {popularMovies && <MovieList title={t("browse.popular")} movies={popularMovies} />}
      {topRatedMovies && <MovieList title={t("browse.topRated")} movies={topRatedMovies} />}
      {upcomingMovies && <MovieList title={t("browse.upcoming")} movies={upcomingMovies} />}
    </div>
  );
};

export default SecondaryContainer;

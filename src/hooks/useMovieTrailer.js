import { useEffect } from "react";
import { API_OPTIONS, TRAILER_VIDEO_TYPE, API_URLS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const movieVideosData = await fetch(
      API_URLS.movie.part1 + movieId + API_URLS.movie.part2,
      API_OPTIONS
    );
    const json = await movieVideosData.json();
    const filteredData = json.results.filter(
      (video) => video.type === TRAILER_VIDEO_TYPE
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

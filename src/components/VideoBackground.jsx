import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="overflow-hidden w-[100%] h-96 sm:h-auto aspect-video pointer-events-none">
      <iframe
        className="w-[300%] h-[130%] ml-[-100%] mt-[-15%]"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?playlist=" +
          trailerVideo?.key +
          "&loop=1&autoplay=1&mute=1&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

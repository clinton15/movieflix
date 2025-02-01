import React from "react";
import { IMG_CDN_LINK } from "../utils/constants";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-3xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies?.map((movie) => (
          <div className="w-24 mr-12" key={movie?.id}>
              <img
                className="min-w-32 h-auto mr-6"
                src={IMG_CDN_LINK + movie?.poster_path}
                alt={movie.title + " poster"}
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

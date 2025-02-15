export const AVATAR =
  "https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};

export const ROUTES = {
  home: "/",
  browse: "/browse",
  error: "/error",
};

export const API_URLS = {
  nowPlaying: "https://api.themoviedb.org/3/movie/now_playing?page=1",
  popular: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  topRated:
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  upcoming: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  movie: {
    part1: "https://api.themoviedb.org/3/movie/",
    part2: "/videos",
  },
};

export const IMG_CDN_LINK = "https://image.tmdb.org/t/p/w500";

export const DEFAULT_LANGUAGE = "en";

export const TRAILER_VIDEO_TYPE = "Trailer";

export const SLICE_NAMES = {
  gpt: "gpt",
  movies: "movies",
  user: "user",
};

export const IFRAME_URL_PARAMS = {
  part1: "https://www.youtube.com/embed/",
  part2: "?playlist=",
  part3: "&loop=1&autoplay=1&mute=1&controls=0",
};

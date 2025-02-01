export const AVATAR =
  "https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTMyOTEyNjU5NWMzZjU2NjdmMWU1MTkyZGJjMDFkNiIsIm5iZiI6MTczNzM4MTM3NS44NDgsInN1YiI6IjY3OGU1NWZmOWQ1ZTM2M2QxOTY0Zjg5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O7P_6luOpsQoVpQz7OTdfSt3dnsYebSoA1eJheVELR4",
  },
};

export const ROUTES = {
  home: "/",
  browse: "/browse",
};

export const API_URLS = {
  nowPlaying: "https://api.themoviedb.org/3/movie/now_playing?page=1",
  popular: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  topRated: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  upcoming: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
};

export const IMG_CDN_LINK = "https://image.tmdb.org/t/p/w500";

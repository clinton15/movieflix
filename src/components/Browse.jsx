import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";


const Browse = () => {

  useNowPlayingMovies();
  
  return (
    <div className="flex flex-row-reverse">
      <Header />
    </div>
  );
};

export default Browse;

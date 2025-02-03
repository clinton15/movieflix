import GptSearchBar from "./GptSearchBar";
import bgImage from "../assets/background.jpg";
const GptSearchPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-black to-black">
        <img src={bgImage} alt="background-image" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;

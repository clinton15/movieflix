import playIcon from "../assets/play.png";
import infoIcon from "../assets/info.png";
import { useTranslation } from "react-i18next";

const VideoTitle = ({ movieTitle, movieOverview }) => {
  const { t } = useTranslation();

  return (
    <div className="h-96 sm:h-auto pt-[25%] pl-28 md:pt-[15%] md:pl-36 absolute w-[100%] aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-2xl hidden sm:block font-bold  sm:xl">{movieTitle}</h1>
      <p className="w-1/2 md:w-2/5 py-2 hidden sm:block sm:w-3/4">{movieOverview}</p>
      {/* <div className="flex pt-4">
        <div className="mr-6">
          <button
            type="button"
            className="flex justify-evenly bg-white hover:bg-opacity-80 text-black w-28 py-1 md:py-2 rounded-md"
          >
            <img className="mt-1 h-6" src={playIcon} alt="play icon" />
            <span className="pb-1 text-lg">{t("browse.play")}</span>
          </button>
        </div>
        <div>
          <button
            type="button"
            className="flex justify-evenly bg-zinc-500 hover:bg-opacity-80 text-white py-1 md:py-2 px-2 rounded-md"
          >
            <img className="h-7" src={infoIcon} alt="info icon" />
            <span className="pb-1 text-lg">{t("browse.moreInfo")}</span>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default VideoTitle;

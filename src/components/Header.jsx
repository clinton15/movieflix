import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser, changeLang } from "../utils/userSlice";
import { ROUTES } from "../utils/constants";
// import { toggleGptSearch } from "../utils/gptSlice";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user?.user);
  const lang = useSelector(store => store.user.lang);
  // const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate(ROUTES.browse);

        // ...
      } else {
        dispatch(removeUser());
        navigate(ROUTES.home);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate(ROUTES.error);
        // An error happened.
      });
  };

  // const handleGptSearch = () => {
  //   dispatch(toggleGptSearch());
  // };

  const handleLanguageChange = (e) => {
    let updatedLang = e.target.value;
    i18n.changeLanguage(updatedLang);
    dispatch(changeLang(updatedLang));
  };

  return (
    <div className="absolute flex justify-around sm:justify-between w-[100%] flex-wrap">
      {/* <div className="ml-32 w-48"> */}
      <div className="flex relative p-2 sm:mt-0 sm:left-32 w-44 sm:w-48 z-10">
        <img src={logo} alt="app-logo" />
      </div>
      {user && (
        <div className="relative flex-row sm:left-0 sm:right-0 flex py-4 pr-4 z-10">
          <div className="content-center">
            <select
              className="mx-4 my-1 p-1 sm:p-2 bg-black text-white opacity-70 border-white border-2 rounded-md"
              name="lang"
              id="lang"
              onChange={handleLanguageChange}
            >
              <option value="en">{t("browse.english")}</option>
              <option value="hi">{t("browse.hindi")}</option>
              <option value="de">{t("browse.german")}</option>
            </select>
            {/* <button
              className="bg-purple-600 text-white rounded-lg p-2 mx-4 my-1"
              type="button"
              onClick={handleGptSearch}
            >
              {showGptSearch ? "GPT Search" : "Home"}
            </button> */}
          </div>
          {/* <img className="w-12 h-12" alt="usericon" src={user?.photoURL} /> */}
          {/* {user && ( */}
            <div className="flex mx-2 p-2 font-bold text-white">
              <button type="button" onClick={handleSignOut}>
                {t("login.signOut")}
              </button>
            </div>
          {/* )} */}
        </div>
      )}
    </div>
  );
};

export default Header;

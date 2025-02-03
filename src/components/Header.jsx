import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { ROUTES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const dispatch = useDispatch();

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
        navigate("/error");
        // An error happened.
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  return (
    <div className="absolute flex justify-between w-[100%]">
      {/* <div className="ml-32 w-48"> */}
      <div className="relative left-32 w-48 z-10">
        <img src={logo} alt="netflix-logo" />
      </div>
      {user && (
        <div className="relative right-0 flex py-4 pr-4 z-10">
          <div>
            <button
              className="bg-purple-600 text-white rounded-lg p-2 mx-4 my-1"
              type="button"
              onClick={handleGptSearch}
            >
              {showGptSearch ? "GPT Search" : "Home"}
            </button>
          </div>
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button
            className="flex p-4 font-bold text-white"
            type="button"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

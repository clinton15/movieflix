import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  return (
    <>
      <div className="absolute w-48 left-32 z-10">
        <img src={logo} alt="netflix-logo" />
      </div>
      {user && (
        <div className="flex py-4 pr-4">
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button
            className="flex p-4 font-bold"
            type="button"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </>
  );
};

export default Header;

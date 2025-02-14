import Header from "./Header";
import bgImage from "../assets/background.jpg";
import { useState, useRef } from "react";
import { validateFormFields } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { AVATAR } from "../utils/constants";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleButtonClick = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);
    let isInvalid = validateFormFields(
      email.current.value,
      password.current.value
    );
    setErrorMessage(isInvalid);
    if (isInvalid) {
      setIsLoading(false);
      return;
    }

    if (isSignUpForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR,
          })
            .then(() => {
              setIsLoading(false);
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setIsLoading(false);
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsLoading(false);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          setIsLoading(false);
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsLoading(false);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="bg-black h-screen z-0">
      <Header />
      <div className="h-screen -z-10 opacity-50">
        <img
          className="h-screen object-cover w-[100%] md:h-[100%]"
          src={bgImage}
          alt="background-image"
        />
      </div>
      <form
        method="post"
        onSubmit={(e) => e.preventDefault()}
        className="z-40 absolute md:w-1/2 lg:w-1/3 my-36 mx-auto p-12 right-0 left-0 w-3/4 top-[14%] mt-10 text-white bg-black flex-col opacity-75"
      >
        <h1 className="font-bold text-2xl md:text-3xl mb-8">
          {isSignUpForm ? t("login.signUp") : t("login.signIn")}
        </h1>
        {isSignUpForm && (
          <input
            className="flex my-4 p-2 w-full bg-black text-white border-2 border-opacity-5 border-white-100 rounded"
            type="input"
            ref={name}
            placeholder={t("login.fullNamePlaceholder")}
          />
        )}
        <input
          className="flex my-4 p-2 w-full bg-black text-white border-2 border-opacity-5 border-white-100 rounded"
          type="input"
          ref={email}
          placeholder={t("login.emailPlaceholder")}
        />
        <input
          className="flex my-4 p-2 w-full bg-black text-white border-2 border-opacity-5 border-white-100 rounded"
          type="password"
          ref={password}
          placeholder={t("login.passwordPlaceholder")}
        />
        {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
        <button
          type="submit"
          className="flex my-4 p-2 w-full justify-center bg-red-600 text-white cursor-pointer hover:bg-red-800 rounded"
          onClick={handleSubmitForm}
        >
          {isLoading && (
            <div className="h-5 w-5 mr-2 mt-0.5 animate-spin rounded-full border-b-2 border-current" />
          )}
          {isSignUpForm ? t("login.signUp") : t("login.signIn")}
        </button>
        <p className="flex flex-wrap">
          <span className="pr-2">
            {isSignUpForm
              ? t("login.alreadyRegistered")
              : t("login.newToMovietflix")}
          </span>
          <span
            className="font-bold text-white cursor-pointer hover:underline"
            onClick={handleButtonClick}
          >
            {isSignUpForm ? t("login.signIn") : t("login.signUpNow")}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

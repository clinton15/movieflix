import Header from "./Header";
import bgImage from "../assets/background.jpg";
import { useState, useRef } from "react";
import { validateFormFields } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const handleButtonClick = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  const handleSubmitForm = () => {
    let isInvalid = validateFormFields(
      email.current.value,
      password.current.value
    );
    setErrorMessage(isInvalid);
    if (isInvalid) return;

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
            photoURL:
              "https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000",
          })
            .then(() => {
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
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="bg-black h-screen z-0">
      <Header />
      <div className="-z-10 opacity-50">
        <img src={bgImage} alt="background-image" />
      </div>
      <form
        method="post"
        onSubmit={(e) => e.preventDefault()}
        className="z-40 absolute w-4/12 my-36 mx-auto p-12 right-0 left-0 top-0 text-white bg-black flex-col opacity-75"
      >
        <h1 className="font-bold text-3xl mb-8">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUpForm && (
          <input
            className="flex my-4 p-2 w-full bg-black text-white border-2 border-opacity-5 border-white-100 rounded"
            type="input"
            ref={name}
            placeholder="Full Name"
          />
        )}
        <input
          className="flex my-4 p-2 w-full bg-black text-white border-2 border-opacity-5 border-white-100 rounded"
          type="input"
          ref={email}
          placeholder="Email address"
        />
        <input
          className="flex my-4 p-2 w-full bg-black text-white border-2 border-opacity-5 border-white-100 rounded"
          type="password"
          ref={password}
          placeholder="Password"
        />
        {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
        <button
          type="submit"
          className="flex my-4 p-2 w-full justify-center bg-red-600 text-white cursor-pointer hover:bg-red-800 rounded"
          onClick={handleSubmitForm}
        >
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </button>
        <p>
          {isSignUpForm ? "Already registered, " : "New to Netflix? "}
          <span
            className="font-bold text-white cursor-pointer hover:underline"
            onClick={handleButtonClick}
          >
            {isSignUpForm ? "Sign In" : "Sign up now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

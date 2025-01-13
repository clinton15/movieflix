import Header from "./Header";
import bgImage from "../assets/background.jpg";

const Login = () => {
  return (
    <div className="bg-black h-screen z-0">
      <Header />
      <div className="-z-10 opacity-50">
        <img src={bgImage} alt="background-image" />
      </div>
      <form className="z-40 absolute w-4/12 my-36 mx-auto p-12 right-0 left-0 top-0 text-white bg-black flex-col opacity-75">
        <h1 className="font-bold text-3xl mb-8">Sign In</h1>
        <input
          className="flex my-4 p-2 w-full bg-black text-white border-2 border-opacity-5 border-white-100 rounded"
          type="input"
          placeholder="Email address"
        />
        <input
          className="flex my-4 p-2 w-full bg-black text-white border-2 border-opacity-5 border-white-100 rounded"
          type="input"
          placeholder="Password"
        />
        <input
          type="button"
          className="flex my-4 p-2 w-full bg-red-600 text-white cursor-pointer hover:bg-red-800 rounded"
          value="Sign In"
        />
        <p>New to Netflix? <span className="font-bold text-white cursor-pointer hover:underline">Sign up now.</span></p>
      </form>
    </div>
  );
};

export default Login;

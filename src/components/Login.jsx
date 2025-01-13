import Header from "./Header";
import bgImage from "../assets/background.jpg";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img src={bgImage} alt="background-image" />
      </div>
    </div>
  );
};

export default Login;

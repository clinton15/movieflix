import "./App.css";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router";
import { ROUTES } from "./utils/constants";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<Login />} />
          <Route path={ROUTES.browse} element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

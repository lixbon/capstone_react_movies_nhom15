import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import "antd/dist/antd.min.css";
import DetailMovie from "./Pages/DetailMovie/DetailMovie";
import Layout from "./Layout/Layout";
import Spinner from "./Components/Spinner/Spinner";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginRegLayout from "./Layout/LoginRegLayout";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";

function App() {
  return (
    <div className="bg-color1">
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route
            path="/login"
            element={<LoginRegLayout Component={LoginPage} />}
          />
          <Route
            path="/register"
            element={<LoginRegLayout Component={RegisterPage} />}
          />
          <Route
            path="/detail/:id"
            element={<Layout Component={DetailMovie} />}
          />
          <Route
            path="/purchase/:maLichChieu"
            element={<Layout Component={CheckOutPage} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

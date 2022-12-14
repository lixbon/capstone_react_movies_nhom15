import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import "antd/dist/antd.min.css";
import DetailMovie from "./Pages/DetailMovie/DetailMovie";
import Layout from "./Layout/Layout";
import Spinner from "./Components/Spinner/Spinner";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";
import BookedFilmPage from "./Pages/BookedFilmPage/BookedFilmPage";
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div className="bg-color1">
      <Spinner />
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Layout Component={HomePage} />} />
            <Route path="/login" element={<Layout Component={LoginPage} />} />
            <Route
              path="/register"
              element={<Layout Component={RegisterPage} />}
            />
            <Route
              path="/detail/:id"
              element={<Layout Component={DetailMovie} />}
            />
            <Route
              path="/purchase/:maLichChieu"
              element={<Layout Component={CheckOutPage} />}
            />
            <Route
              path="/bookedfilm"
              element={<Layout Component={BookedFilmPage} />}
            />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;

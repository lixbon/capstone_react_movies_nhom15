import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/HeaderTheme/Header";

export default function Layout({ Component }) {
  return (
    <div className="">
      <Header />
      <div className="pt-20"> {<Component />}</div>
      <Footer />
    </div>
  );
}

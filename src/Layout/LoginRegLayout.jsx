import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/HeaderTheme/Header";

export default function LoginRegLayout({ Component }) {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className=""> {<Component />}</div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

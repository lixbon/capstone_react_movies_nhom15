import React from "react";
import Header from "../Components/HeaderTheme/Header";

export default function Layout({ Component }) {
  return (
    <div className="space-y-10">
      <Header />
      <div> {<Component />}</div>
    </div>
  );
}

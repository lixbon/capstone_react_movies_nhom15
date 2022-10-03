import React from "react";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <div className="shadow">
      <div className="container mx-auto">
        <div className="h-20  flex mx-auto justify-between items-center">
          <span className="text-yellow-500 text-2xl font-medium animate-bounce">
            Cyberflix
          </span>
          <UserNav />
        </div>
      </div>
    </div>
  );
}

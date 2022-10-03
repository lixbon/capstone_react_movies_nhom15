import React from "react";

const Button = ({ content, style, f }) => {
  return (
    <button
      onClick={f}
      className={
        `px-4 py-2 bg-color2 text-white rounded-md hover:scale-110 hover:bg-blue-600 duration-300 cursor-pointer` +
        " " +
        style
      }
    >
      {content}
    </button>
  );
};

export default Button;

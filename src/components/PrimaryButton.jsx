import React from "react";

export default function PrimaryButton({ text, style, onClickHandler }) {
  return (
    <div
      onClick={onClickHandler}
      className={`text-center text-white bg-gradient-to-tr from-secondary2 to-secondary px-5 py-2 rounded-xl cursor-pointer ${style} hover:shadow-xl transition-all duration-200`}
    >
      {text}
    </div>
  );
}

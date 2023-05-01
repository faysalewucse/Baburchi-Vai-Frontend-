import React from "react";

export default function GradientText({ text, style, onClickHandler }) {
  return (
    <div
      onClick={onClickHandler}
      className={`bg-clip-text text-transparent ${style}`}
    >
      {text}
    </div>
  );
}

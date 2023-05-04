import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl min-h-screen mx-auto flex justify-center items-center">
      <div className="">
        <h1 className="text-9xl font-bold text-indigo-200">404</h1>
        <h1 className="my-2 text-gray-800 font-bold text-2xl">
          Page not found!
        </h1>
        <p className="my-2 text-gray-800">
          Sorry about that! Please visit hompage to get where you need to go.
        </p>
        <PrimaryButton
          text={"Take me there!"}
          style={"w-1/2"}
          onClickHandler={() => navigate("/")}
        />
      </div>
      <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
    </div>
  );
}

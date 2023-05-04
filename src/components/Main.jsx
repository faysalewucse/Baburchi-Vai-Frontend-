import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import { CirclesWithBar } from "react-loader-spinner";

export default function Main() {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      {navigation.state === "loading" && (
        <div className="flex justify-center items-center h-screen">
          <CirclesWithBar
            height="100"
            width="100"
            color="orange"
            visible={true}
            ariaLabel="circles-with-bar-loading"
          />
        </div>
      )}
      <Outlet />
      <Footer />
    </>
  );
}

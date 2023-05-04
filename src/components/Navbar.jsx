import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMinusCircle,
  faPlay,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import brand from "../assets/brandLogo.png";
import PrimaryButton from "./PrimaryButton";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  // user state
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/favourites",
      name: "Favourite Recipes",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-orange-200 sticky top-0 left-0 w-full px-5">
      <div className="md:flex items-center justify-between bg-orange-200 py-4 md:px-10 px-7">
        <div className="flex items-center">
          <img
            onClick={() => navigate("/")}
            className="w-1/3 md:w-1/6 cursor-pointer"
            src={brand}
            alt="brand"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-10 cursor-pointer md:hidden"
        >
          {!open ? (
            <FontAwesomeIcon
              onClick={() => setOpen(!open)}
              icon={faBars}
              color="red"
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setOpen(!open)}
              icon={faXmark}
              color="red"
            />
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto bg-orange-200 md:bg-transparent z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {routes.map((route, index) => (
            <li key={index} className="md:ml-8 text-lg md:my-0 my-7 font-bold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover:text-primary font-normal"
                }
                key={index}
                to={route.path}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
          {currentUser && (
            <li className="group">
              <img
                className="h-10 w-10 rounded-full md:ml-10 border-2 border-primary object-cover"
                src={currentUser?.photoURL}
                alt="pro-pic"
              />
              <div className="hidden group-hover:block group-hover:absolute md:right-44">
                <span className="flex justify-end mr-2">
                  <FontAwesomeIcon
                    className="-rotate-90 text-primary"
                    icon={faPlay}
                  />
                </span>
                <p className="bg-primary text-white px-4 py-1 rounded">
                  {currentUser.displayName}
                </p>
              </div>
            </li>
          )}
          <li>
            {!currentUser ? (
              <PrimaryButton
                onClickHandler={() => navigate("/login")}
                text={"Login"}
                style={"ml-10"}
              />
            ) : (
              <span
                onClick={() => logout()}
                className="md:ml-5 font-bold text-secondary2 border border-secondary2 px-3 py-1 hover:bg-secondary2 hover:text-white cursor-pointer rounded"
              >
                LogOut
              </span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

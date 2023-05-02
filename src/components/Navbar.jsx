import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import GradientText from "../utils/GradientText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import brand from "../assets/brandLogo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/statistics",
      name: "Statistics",
    },
    {
      path: "/applied-jobs",
      name: "Applied Jobs",
    },
    {
      path: "/blog",
      name: "Blog",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-orange-200 sticky top-0 left-0 w-full px-5">
      <div className="md:flex items-center justify-between bg-orange-200 py-4 md:px-10 px-7">
        <div className="flex items-center">
          <img
            onClick={() => {
              <Navigate to="/" />;
            }}
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
        </ul>
      </div>
    </div>
  );
}

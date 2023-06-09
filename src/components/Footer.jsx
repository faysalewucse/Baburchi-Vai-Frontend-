import React from "react";
import { Link } from "react-router-dom";
import brand from "../assets/brandLogo.png";

export default function Footer() {
  return (
    <footer className="bg-orange-200 text-secondary2 p-12 md:p-24">
      <div className="md:flex gap-10 max-w-7xl mx-auto">
        <div className="basis-1/2 text-justify">
          <img
            onClick={() => navigate("/")}
            className="w-1/3 md:w-1/3 cursor-pointer mb-3"
            src={brand}
            alt="brand"
          />
          <p className="text-secondary2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
        <div className="basis-1/4 mt-5 md:mt-0">
          <h1 className="font-bold text-2xl font-display mb-2 md:mb-8">
            Usefull Link
          </h1>
          <ul className="flex flex-col gap-3">
            <Link to="/">Home</Link>
            <Link to="/statistics">Blog</Link>
          </ul>
        </div>
        <div className="basis-1/3 mt-5 md:mt-0">
          <h1 className="font-bold text-2xl font-display mb-8">Contact Now</h1>
          <p className="text-secondary">
            555 4th 5t NW, Washington DC 20530, United States
          </p>
          <p className="mt-5">+88 01750 000 000</p>
          <p className="text-secondary">+88 01750 000 000</p>
          <p className="mt-5">faysal.ewucse@gmail.com</p>
          <p className="text-secondary">faysal65438@gmail.com</p>
        </div>
        <div className="grow mt-5 md:mt-0">
          <h1 className="font-bold text-2xl font-display mb-8">Subscribe</h1>
          <p className="my-5">
            Subscribe for our latest & Articles. We Won’t Give You Spam Mails
          </p>
          <form className="flex items-center">
            <input
              className="w-full border-0 rounded py-2 px-4 focus:outline-none font-bold"
              type="text"
              placeholder="Email Address"
            />
            <i className="fa-solid fa-paper-plane bg-secondary p-3 text-white cursor-pointer rounded-lg -ml-8"></i>
          </form>
        </div>
      </div>
      <hr className="border border-orange-400 my-5" />
      <div className="flex justify-between">
        <h1 className="text-secondary">
          @2023 Baburchivai. All Rights Reserved
        </h1>
        <h1 className="text-secondary">
          Powered by <b>BaburchiVai</b>
        </h1>
      </div>
    </footer>
  );
}

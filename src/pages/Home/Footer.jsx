import React from "react";
import GradientText from "../../utils/GradientText";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-12 md:p-24">
      <div className="md:flex gap-10 max-w-7xl mx-auto">
        <div className="basis-1/2 text-justify">
          <GradientText
            onClickHandler={() => navigate("/")}
            style="font-bold text-4xl bg-gradient-to-tr from-indigo-600 to-purple-400 cursor-pointer md:mb-8"
            text={"JobsLand"}
          />
          <p className="text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
        </div>
        <div className="basis-1/4 mt-5 md:mt-0">
          <h1 className="font-bold text-2xl font-display mb-2 md:mb-8">
            Usefull Link
          </h1>
          <ul className="text-gray-400 flex flex-col gap-3">
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied-jobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/">Contact Us</Link>
          </ul>
        </div>
        <div className="basis-1/3 mt-5 md:mt-0">
          <h1 className="font-bold text-2xl font-display mb-8">Contact Now</h1>
          <p className="text-gray-400">
            555 4th 5t NW, Washington DC 20530, United States
          </p>
          <p className="text-gray-400 mt-5">+88 01750 000 000</p>
          <p className="text-gray-400">+88 01750 000 000</p>
          <p className="text-gray-400 mt-5">faysal.ewucse@gmail.com</p>
          <p className="text-gray-400">faysal65438@gmail.com</p>
        </div>
        <div className="grow mt-5 md:mt-0">
          <h1 className="font-bold text-2xl font-display mb-8">Subscribe</h1>
          <p className="text-gray-400 my-5">
            Subscribe for our latest & Articles. We Won’t Give You Spam Mails
          </p>
          <form className="flex items-center">
            <input
              className="w-full border-0 rounded py-2 px-4"
              type="text"
              placeholder="Email Address"
            />
            <i className="fa-solid fa-paper-plane bg-primary p-6 rounded-lg -ml-16"></i>
          </form>
        </div>
      </div>
      <hr className="border border-slate-900 my-5" />
      <div className="flex justify-between">
        <h1 className="text-gray-400">@2023 JobsLand. All Rights Reserved</h1>
        <h1 className="text-gray-400">
          Powered by <b>JobsLand</b>
        </h1>
      </div>
    </footer>
  );
}

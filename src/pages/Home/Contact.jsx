import React from "react";
import location from "../../assets/location.png";
import email from "../../assets/email.png";
import call from "../../assets/call.png";
import time from "../../assets/time.png";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto form text-center p-10">
      <h1 className="text-4xl font-extrabold text-secondary2">
        Contact With Us
      </h1>
      <p className="md:w-1/2 mx-auto mt-5 mb-10 text-secondary">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </p>
      <div className="flex flex-col md:flex-row gap-5 px-2 md:px-0">
        <div className="w-full left-form grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0">
          <div className="bg-accordion px-18 py-16 border-r-2 border-b-2 border-secondary">
            <img className="mx-auto" src={location} alt="address" />
            <h1 className="font-bold text-2xl text-secondary2 my-2">Address</h1>
            <p className="mx-2">A108 Adam Street, New York, NY 535022</p>
          </div>
          <div className="bg-accordion px-18 py-16 border-b-2 border-secondary">
            <img className="mx-auto" src={call} alt="address" />
            <h1 className="font-bold text-2xl text-secondary2 my-2">Call Us</h1>
            <p>+88 01750 00 00 00</p>
            <p>+88 01750 00 00 00</p>
          </div>
          <div className="bg-accordion px-18 py-16 border-r-2 border-secondary">
            <img className="mx-auto" src={email} alt="address" />
            <h1 className="font-bold text-2xl text-secondary2 my-2">
              Email Us
            </h1>
            <p>faysal.ewucse@gmail.com</p>
            <p>faysal65438@gmail.com</p>
          </div>
          <div className="bg-accordion px-18 py-16">
            <img className="mx-auto" src={time} alt="address" />
            <h1 className="font-bold text-2xl text-secondary2 my-2">
              Working Hours
            </h1>
            <p>Mon-Fri: 9AM to 5PM</p>
            <p>Sunday: 9AM to 1 PM</p>
          </div>
        </div>
        <form className="w-full">
          <input
            className="w-full p-5 border-0 bg-accordion rounded mb-5 focus:outline-secondary2"
            placeholder="Your Name"
            type="text"
          />
          <input
            className="w-full p-5 border-0 bg-accordion rounded mb-5 focus:outline-secondary2"
            placeholder="Your Email"
            type="text"
          />
          <input
            className="w-full p-5 border-0 bg-accordion rounded mb-5 focus:outline-secondary2"
            placeholder="Subject"
            type="text"
          />
          <textarea
            className="w-full p-5 border-0 bg-accordion rounded mb-5 focus:outline-secondary2"
            placeholder="Your Message"
            cols="30"
            rows="10"
          ></textarea>
          <button
            className="w-full p-5 border-0 bg-secondary2 font-bold text-white rounded"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

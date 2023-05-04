import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { currentUser, updateUserProfile } = useAuth();
  const [newDisplayName, setNewDisplayName] = useState(currentUser.displayName);
  const [newPhotoURL, setNewPhotoURL] = useState(currentUser.photoURL);
  const [modal, setModal] = useState(false);

  const updateProfile = async (e) => {
    e.preventDefault();
    await updateUserProfile(newDisplayName, newPhotoURL);
    setModal(false);
  };
  return (
    <div className="bg-orange-50 text-center">
      <div className="max-w-7xl mx-auto p-10 md:p-20 flex justify-center items-center">
        <div>
          <img
            src={currentUser?.photoURL}
            alt="profile_photo"
            className="rounded-full w-1/2 mx-auto"
          />
          <h1 className="font-bold text-secondary2 text-4xl mt-5">
            {currentUser?.displayName}
          </h1>
          <h6>{currentUser.email}</h6>
        </div>
      </div>
      {/* The button to open modal */}
      <label
        onClick={() => setModal(!modal)}
        className="btn mb-10 bg-secondary border-none hover:bg-secondary2"
      >
        Edit Profile
      </label>

      {/* Put this part before </body> tag */}
      {modal && (
        <div className="">
          <div
            onClick={() => setModal(false)}
            className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
          ></div>
          <div className="rounded w-3/4 overflow-auto lg:w-2/5 bg-white p-2 md:p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <form onSubmit={updateProfile} className="text-left p-5 md:p-10">
              <label
                className="font-bold text-secondary2"
                htmlFor="displayName"
              >
                Name
              </label>
              <br />
              <input
                id="displayName"
                type="text"
                className="p-3 bg-orange-100 rounded font-bold mb-2 w-full"
                defaultValue={currentUser?.displayName}
                onChange={(e) => setNewDisplayName(e.target.value)}
              />
              <br />
              <label className="font-bold text-secondary2" htmlFor="photoURL">
                Photo URL
              </label>
              <br />
              <input
                id="photoURL"
                type="text"
                className="p-3 bg-orange-100 rounded font-bold w-full"
                defaultValue={currentUser?.photoURL}
                onChange={(e) => setNewPhotoURL(e.target.value)}
              />
              <input
                className="bg-primary text-white w-full p-2 mt-5 rounded hover:bg-primaryHover cursor-pointer"
                type="submit"
                value="Update"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

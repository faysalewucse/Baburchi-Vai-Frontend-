import React from "react";

export default function ChefInfoCard({ info }) {
  return (
    <div>
      <img src={info.chef_picture} alt="" />
      <div>
        <h1>{info.chef_name}</h1>
        <h1>{info.years_of_experience}</h1>
        <h1>{info.number_of_recipes}</h1>
        <h1>{info.likes}</h1>
      </div>
    </div>
  );
}

// "id": 1,
//     "chef_picture": "https://shorturl.at/qFOTX",
//     "chef_name": "Mridul Roy",
//     "years_of_experience": 15,
//     "number_of_recipes": 100,
//     "bangladeshi_recipes": [
//       "Chingri malai curry",
//       "Dhaka-style biriyani",
//       "Shorshe ilish"
//     ],
//     "likes": 5000

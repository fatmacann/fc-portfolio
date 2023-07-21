import React from "react";
import HeroImage from "../assets/heroImage.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
        <div className="max-w-screen-lg mx-auto p-5 flex flex-col justify-center w-full h-full text-white">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Fatma Can
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Has a creative perspective with a strong interest in programming and design. 
          Contributes to projects with comprehensive technical knowledge and high motivation. 
          Offers well-developed time management skills and teamwork abilities.

          </p>

        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

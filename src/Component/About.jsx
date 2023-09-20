import React from "react";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. i'm Fresher, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              {" "}
              I am equipped to create dynamic and responsive web applications.
              My commitment to crafting engaging user experiences and leveraging
              the latest industry trends sets me apart in the world of web
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

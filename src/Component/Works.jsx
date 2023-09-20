import React from "react";
import Work from "../assets/workImg.jpeg";
import BloodBank from "../assets/onlineBlodbak.jpeg";
import ReactQuiz from "../assets/ReactQuiz.png";
import Blog from "../assets/BlogApp.png";
import carReantal from "../assets/Carental.png";
import NodeFarm from "../assets/NodeFarm.png";

export default function Works() {
  return (
    <div name="works" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            My Works
          </p>
          <p className="py-6">Check out My Recent works</p>
        </div>
        {/* card container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${BloodBank})` }}
          >
            {/* Move effect */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                Online Blood Bank Management System
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Suhaitsht/Online_blood_bank_management_system">
                  <button className="text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${ReactQuiz})` }}
          >
            {/* Move effect */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Js Quiz
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Suhaitsht/react_quizapp">
                  <button className="text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${Blog})` }}
          >
            {/* Move effect */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Blog App
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${NodeFarm})` }}
          >
            {/* Move effect */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                Node js
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${carReantal})` }}
          >
            {/* Move effect */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                Car_Rental
              </span>
              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

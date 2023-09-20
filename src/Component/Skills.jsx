import React from "react";
import Css from "../assets/css.png";
import Github from "../assets/github.png";
import react from "../assets/react.png";
import Node from "../assets/node.png";
import Mongodb from "../assets/mongo.png";
import Html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import php from "../assets/pngwing.com.png";

export default function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are The Technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-wd shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Html} alt="" srcset="" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-wd shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Css} alt="" srcset="" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-wd shadow-[#040c16] hover:scale-110 duration-500">
            <img src={javascript} alt="" srcset="" className="w-20 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-wd shadow-[#040c16] hover:scale-110 duration-500">
            <img src={react} alt="" srcset="" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-wd shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Node} alt="" srcset="" className="w-20 mx-auto" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-wd shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Mongodb} alt="" srcset="" className="w-20 mx-auto" />
            <p className="my-4">Mongodb</p>
          </div>
          <div className="shadow-wd shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Github} alt="" srcset="" className="w-20 mx-auto" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-wd shadow-[#040c16] hover:scale-110 duration-500">
            <img src={php} alt="" srcset="" className="w-20 mx-auto" />
            <p className="my-4">php</p>
          </div>
        </div>
      </div>
    </div>
  );
}

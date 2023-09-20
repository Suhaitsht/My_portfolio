/* eslint-disable no-unused-vars */
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    Cursor,
    cursorStyle: "|",
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hello, I'm </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Suhait
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a{" "}
          <span className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            {text}
          </span>
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a proficient full-stack developer with a diverse skill set that
          encompasses various web development technologies. My expertise spans
          across HTML, Bootstrap, CSS, React.js, Node.js, jQuery, and
          JavaScript.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

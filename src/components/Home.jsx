"use client";

import { useEffect, useState } from "react";
import ReactTyped from "react-typed";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-screen capitalize ">
      <p className="text-2xl font-bold sm:text-5xl">hey there, i am harsh</p>
      <strong className="text-slider text-xl text-center font-semibold sm:text-3xl text-primary mt-5 mb-10">
        <ReactTyped
          strings={[
            "Front End Developer",
            "Full-Stack Developer",
            "Software Engineer",
          ]}
          typeSpeed={60}
          backDelay={1100}
          backSpeed={30}
          loop
        />
      </strong>
      <button className="w-auto font-semibold  px-3 py-4 text-lg rounded-xl transition-all duration-500 text-white bg-primary">
        view my work
      </button>
    </div>
  );
}

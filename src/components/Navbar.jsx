"use client";
import manoutline from "@/assets/images/male.png";
import man from "@/assets/images/male1.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { NAVLINKS } from "@/utils/const.data";

export default function Navbar() {
  const [scroll, setscroll] = useState(false);
  const [menuopen, setmenuopen] = useState(false);
  useEffect(() => {
    const updateScroll = () => {
      if (window.pageYOffset > 20) setscroll(true);
      else setscroll(false);
    };
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [scroll]);
  const scrollupstyle = "pt-10  text-primary";
  const scrolldownstyle = "pt-4 bg-primary text-black";
  return (
    <>
      <div
        className={`fixed z-40 navbar border-b-2 border-black flex justify-between items-center px-8  sm:px-24 py-4 text-2xl w-full transition-all duration-500 ${
          !scroll ? scrollupstyle : scrolldownstyle
        }`}
      >
        <div className="">
          {!scroll ? (
            <Image
              src={man}
              alt="logo"
              className="h-10 sm:h-20 w-auto p-2 border-2 border-t-0 border-b-0 border-primary rounded-xl"
            />
          ) : (
            <Image
              src={manoutline}
              alt="logo"
              className="h-10 sm:h-20 w-auto p-2 border-2 border-black border-l-0 border-r-0 rounded-xl "
            />
          )}
        </div>
        <div className="hidden md:flex space-x-8 sm:text-xl md:text-2xl capitalize font-medium">
          {NAVLINKS.map((e) => (
            <div key={e.title} className="navlinks ">
              <p>{e.title}</p>
            </div>
          ))}
        </div>
        <div
          className="flex flex-col md:hidden"
          onClick={() => setmenuopen((e) => !e)}
        >
          <MenuFoldOutlined />
        </div>
      </div>
      <div className="">
        <div
          onClick={() => setmenuopen(false)}
          className={`underlay ${
            menuopen ? "visible" : "hidden"
          } bg-primary backdrop-blur-md bg-opacity-5`}
        ></div>
        <div
          className={`fixed z-40  bg-black  text-primary text-2xl w-3/5 h-screen top-0 right-0 px-8 py-4  rounded-tl-xl transition-all  ${
            menuopen ? "menu-slider-open" : "menu-slider-close "
          } md:hidden `}
        >
          <div className="text-right pb-8">
            <MenuUnfoldOutlined onClick={() => setmenuopen(false)} />
          </div>

          <div className="flex flex-col space-y-4 justify-center items-end capitalize h-4/6">
            {NAVLINKS.map((e) => (
              <div
                key={e.title}
                className="navlinks flex justify-between items-center w-full"
                onClick={() => setmenuopen(false)}
              >
                <e.icon />
                <p>{e.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

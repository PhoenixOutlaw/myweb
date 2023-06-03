import { SKILLS } from "@/utils/const.data";
import { Avatar } from "antd";
import React from "react";

export const About = () => {
  return (
    <div className=" bg-gray-900 px-10 py-20 md:py-14 rounded-2xl flex flex-col-reverse md:flex-row justify-between capitalize text-xl md:space-x-5">
      <div className=" w-full py-5 mt-14 md:mt-0 md:py-14">
        <h2 className="text-center mb-6">skills</h2>
        <div>
          {SKILLS.map((skill,i) => (
            <Bar key={i} skill={skill} />
          ))}
        </div>
      </div>
      <div className="w-full bg-primary bg-opacity-5 rounded-2xl px-4 py-5 md:py-14 md:px-10 flex flex-col items-center">
        <h2 className="text-primary mb-8 text-center md:text-left w-full text-2xl ">
          about me
        </h2>
        <Avatar
          size={180}
          src="https://harshyadev.vercel.app/static/media/me.25c358e9.jpg"
          className="mb-12"
        >
          h
        </Avatar>
        <p className="capitalize font-medium ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi
          quae maxime error aspernatur ab sapiente quo, magni ea non nulla
          expedita, temporibus corporis, voluptatem recusandae suscipit dolores
          doloremque facilis. Architecto, eligendi!
        </p>
      </div>
    </div>
  );
};
function Bar({ skill }) {
  const { name, progress } = skill;
  const style = {
    ":after": {
      width: "80%",
    },
  };
  return (
    <div className=" text-base mb-5">
      <p className="font-light">{name} </p>
      <div className="flex items-center space-x-2">
        <div className=" bg-gray-200  w-full h-4 relative overflow-hidden">
          <div
            className=" absolute h-full w-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p>{progress}%</p>
      </div>
    </div>
  );
}

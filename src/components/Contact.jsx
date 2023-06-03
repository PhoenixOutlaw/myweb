import Image from "next/image";
import React from "react";
import contact from "@/assets/images/contact.webp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Contact() {
  return (
    <>
      <div className="px-10 py-8 mt-6 rounded-t-2xl flex flex-col lg:space-x-8 lg:flex-row ">
        <div className=" w-full lg:w-5/12 flex flex-col justify-center">
          <h3 className="text-primary capitalize text-xl lg:text-3xl font-semibold">
            send a message
          </h3>
          <Image
            src={contact}
            alt="contact"
            className="flex rounded-full bg-primary mt-12 h-56 object-contain w-fit mx-auto aspect-square lg:hidden"
          />
          <form action="" className="flex flex-col space-y-6 mt-8 lg:mt-24">
            <input
              className="outline-none bg-transparent  border-primary border-2 w-full rounded-xl px-4 py-1"
              type="text"
              placeholder="your name"
            />
            <input
              className="outline-none bg-transparent  border-primary border-2 w-full rounded-xl px-4 py-1"
              type="text"
              placeholder="your email"
            />
            <input
              className="outline-none bg-transparent  border-primary border-2 w-full rounded-xl px-4 py-1"
              type="text"
              placeholder="subject"
            />
            <textarea
              className="outline-none bg-transparent border-primary border-2 w-full rounded-xl px-4 py-1"
              type="text"
              placeholder="message"
            />
            <button className="bg-primary px-4 py-2 rounded-2xl ">
              submit
            </button>
          </form>
        </div>
        <div className="w-full mt-12 lg:mt-0 lg:w-7/12 flex items-end flex-col">
          <div className="">
            <h5 className="text-primary capitalize text-3xl lg:text-5xl  text-center sm:text-left ">
              get in touch
            </h5>
            <p className="text-base lg:text-xl mt-4">
              Whether you want to get in touch, talk about a project
              collaboration, or just say hi, I'd love to hear from you. Simply
              fill the from and send me an email.
            </p>
            <div className="flex flex-col space-y-4 mt-3 text-xl ">
              <div className="flex space-x-6">
                <MailOutlineIcon className="text-primary" />
                <p>harshyadav@gmail.com</p>
              </div>
              <div className="flex space-x-6">
                <LocalPhoneIcon className="text-primary" />
                <p>+9178734987</p>
              </div>
              <div className="flex space-x-6">
                <LocationOnIcon className="text-primary" />
                <p>delhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

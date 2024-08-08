import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import thumb6 from "../assets/thumb6.png";

export default function SectionInfo() {
  return (
    <>
      <div className="flex flex-col justify-between md:flex-row items-center p-12 sm:p-32 bg-w">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 p-10">
          <div className="w-[20%] h-[5px] bg-red-500">{""}</div>
          <h2 className="text-4xl font-bold text-gray-800 my-8">
            Packages that are aprodable
          </h2>
          <p className="text-gray-500 text-sm font-bold mb-8 me-20">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <a
            href="#learn-more"
            className="flex jutify-center items-center text-btn font-bold hover:underline"
          >
            Learn More
            <IoIosArrowForward className="w-[30px] h-[30px]" />
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center relative ms-5">
          <img src={thumb6} alt="Children learning" className="w-full h-full" />
        </div>
      </div>
    </>
  );}

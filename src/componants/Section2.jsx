import React from 'react'
import { Cards } from "../utils/Utils"

import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { FaChartArea } from "react-icons/fa";

import cover1 from "../assets/productcover63.png";
import cover2 from "../assets/productcover64.png";
import cover3 from "../assets/productcover65.png";
import cover4 from "../assets/productcover66.png";
import stick1 from "../assets/like.png"
import stick2 from "../assets/basket.png"
import stick3 from "../assets/eye.png"

export default function Section2() {
  return (
    <>
      <div className="bg-w py-16 px-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <h2 className="text-sm text-btn font-bold tracking-wide uppercase mb-3">
              Practice Advice
            </h2>
            <p className="mt-1 text-2xl leading-8 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Make online education accessible
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
              Problems trying to resolve the conflict between
            </p>
            <p className="max-w-2xl text-sm text-gray-500">
              the two majorrealms of Classical physics: Newtonian mechanics.
            </p>
          </div>

          <div className="flex justify-center items-center mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            <Cards
              imgSrc={cover1}
              stick1={stick1}
              stick2={stick2}
              stick3={stick3}
              down={<FiDownload className="w-[20px] h-[20px]" />}
              flesh={<IoIosArrowForward className="w-[20px] h-[20px]" />}
              pro={<FiClock className="text-btn" />}
              les={<FaChartArea className="text-red-500" />}
              hr={<FiClock className="text-btn" />}
              sale={true}
              isNew={true}
              language="English"
              rating="4.9"
              title="Graphic Design"
              description="We focus on ergonomics and meeting you..."
              lessons="15"
              duration="22hrs 30min"
              price="16.48"text-red-500
              discountedPrice="6.48"
              start={<FaStar />}
            />
            <Cards
              imgSrc={cover2}
              stick1={stick1}
              stick2={stick2}
              stick3={stick3}
              down={<FiDownload className="w-[20px] h-[20px]" />}
              flesh={<IoIosArrowForward className="w-[20px] h-[20px]" />}
              pro={<FiClock className="text-btn" />}
              les={<FaChartArea className="text-red-500" />}
              hr={<FiClock className="text-btn" />}
              sale={true}
              isNew={true}
              language="English"
              rating="4.9"
              title="Graphic Design"
              description="We focus on ergonomics and meeting you..."
              lessons="15"
              duration="22hrs 30min"
              price="16.48"
              discountedPrice="6.48"
              start={<FaStar />}
            />
            <Cards
              imgSrc={cover3}
              stick1={stick1}
              stick2={stick2}
              stick3={stick3}
              down={<FiDownload className="w-[20px] h-[20px]" />}
              flesh={<IoIosArrowForward className="w-[20px] h-[20px]" />}
              pro={<FiClock className="text-btn" />}
              les={<FaChartArea className="text-red-500" />}
              hr={<FiClock className="text-btn" />}
              sale={true}
              isNew={true}
              language="English"
              rating="4.9"
              title="Graphic Design"
              description="We focus on ergonomics and meeting you..."
              lessons="15"
              duration="22hrs 30min"
              price="16.48"
              discountedPrice="6.48"
              start={<FaStar />}
            />
            <Cards
              imgSrc={cover4}
              stick1={stick1}
              stick2={stick2}
              stick3={stick3}
              down={<FiDownload className="w-[20px] h-[20px]" />}
              flesh={<IoIosArrowForward className="w-[20px] h-[20px]" />}
              pro={<FiClock className="text-btn" />}
              les={<FaChartArea className="text-red-500" />}
              hr={<FiClock className="text-btn" />}
              sale={true}
              isNew={true}
              language="English"
              rating="4.9"
              title="Graphic Design"
              description="We focus on ergonomics and meeting you..."
              lessons="15"
              duration="22hrs 30min"
              price="16.48"
              discountedPrice="6.48"
              start={<FaStar />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

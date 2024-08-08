import React, { useState } from "react";
import { Card } from '../utils/Utils'
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"

export default function SectionWelcom() {
  return (
    <>
      <div className="bg-main min-h-screen flex flex-col items-center justify-center gap-5 text-center text-white px-[10%] sm:px-[30%]">
        <h2 className="text-sm text-blue-500 font-bold mb-[50px]">Welcome</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Selling on the internet like a pro
        </h1>
        <p className="text-lg md:text-xl mb-8">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </p>
        <div className="flex-col items-center text-sm font-bold sm:flex-col sm:items-center">
          <button className="bg-btn text-w py-3 px-10 mx-2 my-2 rounded sm:my-0">
            Get Quote Now
          </button>
          <button className="border border-btn text-btn py-3 px-10 mx-2 rounded hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="h-auto w-full flex justify-center items-center bg-main">
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-20 mb-10">
          <Card
            imgSrc={card1}
            imgAlt="Chat souriant"
            title="Training Courses"
            content="The gradual accumulation of information about atomic and small-scale behaviour..."
          />
          <Card
            imgSrc={card2}
            imgAlt="Chat souriant"
            title="2,769 online courses"
            content="The gradual accumulation of information about atomic and small-scale behaviour..."
          />
          <Card
            imgSrc={card3}
            imgAlt="Chat souriant"
            title="Training Courses"
            content="The gradual accumulation of information about atomic and small-scale behaviour..."
            myClass="border border-btn"
          />
        </div>
      </div>
    </>
  );
}

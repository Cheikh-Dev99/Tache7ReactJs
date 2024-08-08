import React from "react";
import { ExpertCard } from "../utils/Utils";
import { FaStar } from "react-icons/fa";

import expert1 from "../assets/exp1.png";
import expert2 from "../assets/exp2.png";

export default function SectionExpert() {
  return (
    <>
      <section className="py-32 px-[10%]">
        <h2 className="text-btn text-sm font-bold mb-2">Practice Advice</h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Experts Teacher
        </h1>
        <p className="flex flex-col text-gray-400 font-semibold text-sm mb-32">
          <span>Problems trying to resolve the conflict between</span>
          <span>
            the two major realms of Classical physics: Newtonian mechanics
          </span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 justify-center">
          <ExpertCard
            imgSrc={expert1}
            star={FaStar}
            description="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
            rating={5}
            name="Regina Miles"
            title="Designer"
          />
          <ExpertCard
            imgSrc={expert2}
            star={FaStar}
            description="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
            rating={4}
            name="Regina Miles"
            title="Designer"
          />
        </div>
      </section>
    </>
  );
}

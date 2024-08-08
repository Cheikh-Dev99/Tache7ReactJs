import React from 'react'

export default function SectionFeatured() {
  return (
    <>
      <section className="py-32 px-10 text-center">
        <h2 className="text-blue-500 text-sm font-bold mb-2">
          Practice Advice
        </h2>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Featured Products
        </h1>
        <p className="flex flex-col text-center text-gray-500 font-semibold text-sm mb-24">
          <span>Problems trying to resolve the conflict between</span>
          <span>
            the two major realms of Classical physics: Newtonian mechanics
          </span>
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-gray-300 rounded-l-lg w-2/4 focus:outline-none"
          />
          <button className="text-sm bg-btn text-white font-bold py-4 px-8 rounded-r-lg">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
}

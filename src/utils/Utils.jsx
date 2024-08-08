import React from "react";

// Navbars
export const Brand = ({ children }) => {
  return (
    <a href="#" className="text-2xl font-bold me-16 sm:me-0">
      {children}
    </a>
  );
};
export const NavLink = ({ href, children, myClass }) => {
  return (
    <a
      href={href}
      className={`${myClass} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
    >
      {children}
    </a>
  );
};
export const MobileNavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </a>
  );
};
export const NavButton = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Section 1
export const Card = ({ imgSrc, imgAlt, title, content, myClass }) => {
  return (
    <div
      className={`cards w-[90%] flex-col items-center bg-white shadow-md p-10 m-10 hover:bg-btn hover:text-w`}
    >
      <div className="flex items-center mb-4">
        <img
          src={imgSrc}
          alt={imgAlt}
          className={`${myClass} w-[60px] h-[60px] rounded-lg`}
        />
      </div>
      <h1 className="text-[16px] font-bold py-3">{title}</h1>
      <div className="w-[20%] h-[1%] bg-red-500">{""}</div>
      <p className="pt-6 text-sm">{content}</p>
    </div>
  );
};

// Section 2
export const Cards = ({
  imgSrc,
  sale,
  isNew,
  language,
  rating,
  title,
  description,
  lessons,
  duration,
  price,
  discountedPrice,
  stick1,
  stick2,
  stick3,
  start,
  down,
  flesh,
  pro,
  les,
  hr
}) => {
  return (
    <div className="w-full max-w-sm mx-4 my-4 bg-white shadow-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-80 object-cover object-center"
          src={imgSrc}
          alt={title}
        />
        {sale && (
          <span className="absolute top-5 left-5 rounded-sm bg-red-500 text-white text-xs px-3 py-1">
            Sale
          </span>
        )}
        {isNew && (
          <span className="absolute flex space-x-2 justify-center bottom-10 w-full rounded-sm bg-transparen text-white text-xs px-3 py-3 rounded-sm">
            <img
              src={stick1}
              alt="like"
              className="rounded-full w-[40px] h-[40px] m-1"
            />
            <img
              src={stick2}
              alt="basket"
              className="rounded-full w-[40px] h-[40px] m-1"
            />
            <img
              src={stick3}
              alt="eye"
              className="rounded-full w-[40px] h-[40px] m-1"
            />
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-btn text-sm font-bold">{language}</span>
          <div className="ml-auto flex items-center bg-gray-900 p-2 rounded-full">
            <span className="text-yellow-500 text-xs mr-1">{rating}</span>
            <span className="text-yellow-500">{start}</span>
          </div>
        </div>
        <h2 className="text-gray-800 text-md font-bold">{title}</h2>
        <p className="text-gray-400 font-bold text-sm mt-1">{description}</p>
        <div className="flex items-center mt-4">
          <p className="flex space-x-2 items-center text-gray-500 text-xs mr-1">
            <span className="font-light">{down}</span>
            <span className="font-bold text-sm">{lessons}</span>
            <span className="font-bold text-sm"> Sales</span>
          </p>
        </div>
        <div className="flex items-center mt-4">
          <span className="text-gray-400 text-sm mr-1">${price}</span>
          <span className="text-green-500 text-lg font-bold">
            ${discountedPrice}
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-3 mx-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">{pro}Pro...</span>
        <span className="flex items-center gap-1">{les}64 Les..</span>
        <span className="flex items-center gap-1">{hr}22hr...</span>
      </div>
      <div className="p-4 flex items-center justify-start">
        <button className="flex items-center font-bold bg-w text-btn border border-btn text-sm px-5 py-3 rounded-full hover:bg-btn hover:text-w transition">
          Learn More
          {flesh}
        </button>
      </div>
    </div>
  );
};

// SectionExpert
export const ExpertCard = ({
  imgSrc,
  description,
  rating,
  name,
  title,
  star: Star,
}) => {
  return (
    <div className="text-center px-28">
      <img
        src={imgSrc}
        alt={name}
        className="mx-auto w-128 h-128 rounded-full mb-4"
      />
      <p className="text-gray-400 font-semibold text-sm mb-4">{description}</p>
      <div className="flex justify-center items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{title}</p>
    </div>
  );
};

// Footer
export function FooterSection({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}
export function FooterLink({ href, children }) {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-white">
        {children}
      </a>
    </li>
  );
}
export function SocialIcon({ href, icon: Icon }) {
  return (
    <a href={href} className="text-blue-500">
      <Icon size={24} />
    </a>
  );
}
import React, { useState } from "react";
import { NavLink, MobileNavLink, NavButton, Brand } from "../utils/Utils";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-main text-white py-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <NavButton onClick={toggleMenu}>
                {isMenuOpen ? (
                  <FaTimes className="block h-6 w-6" />
                ) : (
                  <FaBars className="block h-6 w-6" />
                )}
              </NavButton>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
              <div className="flex-shrink-0 px-5">
                <Brand>BrandName</Brand>
              </div>
              <div className="hidden sm:block text-w sm:ml-6">
                <div className="flex space-x-4">
                  <NavLink href="#">Home</NavLink>
                  <NavLink href="#">Product</NavLink>
                  <NavLink href="#">Pricing</NavLink>
                  <NavLink href="#">Contact</NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <NavLink href="#" myClass="hidden sm:block">
                    Login
                  </NavLink>
              <a
                href="#"
                className="text-sm ml-4 bg-btn text-white font-bold py-3 px-4 rounded inline-flex items-center"
              >
                JOIN US
                <IoArrowForwardOutline className="ms-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu NavLink */}
        <div
          className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#">Home</MobileNavLink>
            <MobileNavLink href="#">Product</MobileNavLink>
            <MobileNavLink href="#">Pricing</MobileNavLink>
            <MobileNavLink href="#">Contact</MobileNavLink>
            <MobileNavLink href="#">Login</MobileNavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
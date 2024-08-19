/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""
        }`}
      >
        * <div className="flex items-center justify-between">
           <div className="text-white font-bold text-lg cursor-pointer">
            <img src="data:image/jpeg;base64,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" alt="" className="h-10" />
          </div> 
          
          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body">
            <Link activeClass="active" smooth={true} spy={true} offset={-100} 
              to="home"
              className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="skills" className="block hover:text-gray-400 py-2 px-4 cursor-pointer">
              Skills
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="about" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
              
              About me
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="portfolio" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
              
              Portfolio
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="testimonials" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
              Testimonials
            </Link>
          </div>

          {/* contact me btn */}
          <div className="lg:block hidden">
            <button className="px-4 py-2 bg-transparent border border-primary text-primary rounded hover:bg-primary hover:text-white transition-all duration-300">
              Contact Me
            </button>
          </div>

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-body p-4 rounded-lg text-white">
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="home" className="block hover:text-gray-400 py-2">
              Home
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="skills" className="block hover:text-gray-400 py-2">
              Skills
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="about" className="block hover:text-gray-400 py-2">
              About me
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="portfolio" className="block hover:text-gray-400 py-2">
              Portfolio
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100} to="testimonials" className="block hover:text-gray-400 py-2">
              Testimonials
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

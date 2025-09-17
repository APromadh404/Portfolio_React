import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { toggleMenu } from "../../state/menuSlice";
import Themetoggle from "../ui/theme-toggle";


const NavBarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const dispatch = useDispatch();
 
  
  

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between bg-background/95 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-lg border border-border transition-colors duration-300">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent hidden md:block">
                Avishka Fernando
              </h1>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent md:hidden">
                AF
              </h1>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              {links.map((link, index) => (
                <div key={index} className="group relative">
                  <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-130}
                    to={link.section}
                    className="cursor-pointer text-foreground font-medium hover:text-amber-500 dark:hover:text-pink-400 transition-all duration-300 py-2"
                  >
                    {link.link}
                  </Link>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Themetoggle/>
              </div>
              <button className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to="contact"
                  className="flex items-center gap-2"
                >
                  Hire Me
                  <LuArrowDownRight className="h-4 w-4" />
                </Link>
              </button>
              <button
                className="lg:hidden p-2 rounded-xl bg-gradient-to-r from-amber-500 to-pink-500 text-white hover:from-amber-600 hover:to-pink-600 hover:shadow-md transition-all duration-200 border border-transparent"
                onClick={setToggleMenu}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <IoClose className="h-6 w-6" />
                ) : (
                  <GiHamburgerMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={setToggleMenu}
          ></div>
          <div className="absolute top-20 left-4 right-4 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden transition-colors duration-300">
            <div className="py-6">
              {links.map((link, index) => (
                <Link
                  key={index}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-130}
                  to={link.section}
                  className="block px-6 py-4 text-lg font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground hover:text-amber-600 dark:hover:text-pink-400 transition-all duration-200 cursor-pointer border-b border-border last:border-b-0"
                  onClick={setToggleMenu}
                >
                  {link.link}
                </Link>
              ))}
              <div className="px-6 py-4 border-b border-border">
               <Themetoggle/>
              </div>
              <div className="px-6 pt-4">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-pink-600 hover:shadow-lg transition-all duration-300">
                  <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-120}
                    to="contact"
                    className="flex items-center gap-2 w-full justify-center"
                    onClick={setToggleMenu}
                  >
                    Hire Me
                    <LuArrowDownRight className="h-4 w-4" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBarMain;
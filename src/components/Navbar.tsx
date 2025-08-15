'use client';

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { CgMenuMotion } from "react-icons/cg";
import Link from 'next/link';

interface NavBarLink {
  name: string;
  to: string;
}

interface NavbarProps {
  hoverBg?: string;
  navBarLinks: NavBarLink[];
}

/**
 * Navigation bar with desktop + mobile support.
 * @param {string} hoverBg - A Tailwind class to apply on hover for the main CTA button.
 * @param {Array} navBarLinks - Array of objects: [{ name, to }, ...]
 */
const Navbar: React.FC<NavbarProps> = ({ hoverBg, navBarLinks }) => {
  const [showMenu, setShowMenu] = useState(false);

  const changeMenuVisibility = () => setShowMenu(prev => !prev);

  return (
    <>
      <nav
        className="bg-primary flex items-center responsivePad pt-[24px] pb-[16px] justify-between sticky z-50 top-0"
        aria-label="Main Navigation"
      >
        {/* Home Link */}
        <Link href="/#home" aria-label="Home">
          <p className="text-white text-[16px] fade-left fade-in h4 max-md:text-[32px]">
            Byt.
          </p>
        </Link>

        {/* DESKTOP NAV */}
        <div className="max-[960px]:hidden flex space-x-4 h5 fade-right fade-in">
          <ul className="bg-secondary flex text-white rounded-full items-center space-x-6 px-8 p">
            {navBarLinks.map((link, index) => (
              <li
                key={index}
                className="hover:translate-y-[-8px] transition-all duration-300 hover:pl-2"
              >
                {/* If link.to starts with "/#" => same page anchor */}
                {link.to.startsWith('/#') ? (
                  <Link href={link.to} aria-label={`Navigate to ${link.name}`}>
                    {link.name}
                  </Link>
                ) : (
                  // Otherwise, use standard Link for normal route
                  <Link href={link.to} aria-label={`Navigate to ${link.name}`}>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* "Book a call" => anchor or separate route? */}
          <Link href="/contact" aria-label="Book a call">
            <button
              className={`
                ${hoverBg}
                p bg-white
                rounded-full
                flex items-center
                p-3 px-8
                justify-center
                btn
                hover:bg-primary
                hover:text-white
                transition-all
                hover:px-12
                duration-300
              `}
            >
              Book a call <FaPlus className="plus" aria-hidden="true" />
            </button>
          </Link>
        </div>

        {/* MOBILE NAV ICON */}
        <div className="min-[961px]:hidden text-white h3 fade-right fade-in max-md:text-[32px]">
          <button
            onClick={changeMenuVisibility}
            aria-label={showMenu ? "Close Menu" : "Open Menu"}
            aria-expanded={showMenu}
            aria-controls="mobile-menu"
          >
            {!showMenu ? (
              <CgMenuMotion aria-hidden="true" />
            ) : (
              <RxCross2 aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV MENU */}
      <CSSTransition
        in={showMenu}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <div
          className="bg-primary fixed inset-0 flex flex-col items-end justify-center z-40 h4 responsivePad"
          id="mobile-menu"
          aria-modal="true"
        >
          <ul className="flex flex-col text-white space-y-10 h1 text-[16px] text-right">
            {navBarLinks.map((link, index) => (
              <li
                key={index}
                className="hover:translate-y-[-5px] transition-transform duration-200"
              >
                {link.to.startsWith('/#') ? (
                  <Link
                    href={link.to}
                    onClick={() => setShowMenu(false)}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.to}
                    onClick={() => setShowMenu(false)}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </>
  );
};

export default Navbar;

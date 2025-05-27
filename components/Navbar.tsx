'use client'
import React from 'react'
import { useEffect, useState } from "react";

interface MyProps {
  "data-hide": boolean
}

function MenuIcon(props: MyProps) {
  return (
    <svg
      className="h-5 w-5 absolute text-second"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: MyProps) {
  return (
    <svg
      className="h-5 w-5 absolute text-second"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <nav className='bg-primary-background fixed w-[95%] z-20 top-0 start-0'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href="https://helloibe.com" className='flex items-center space-x-3 rtl:space-x-reverse'>
          <p className='text-second font-medium hover:text-primary uppercase'>
            <span className='text-primary'>{'{'}</span>helloibe.me<span className='text-primary'>{'}'}</span>
          </p>
        </a>
        <button
          className="burger visible md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
        <div className="items-center justify-between hidden md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col md:p-0 mt-4 font-medium border rounded-lg md:space-x-3 md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="https://helloibe.com" className="block py-2 text-second rounded-sm md:bg-transparent md:p-0 hover:text-primary"><span className='text-primary'>{'{'}</span>home<span className='text-primary'>{'}'}</span></a>
            </li>
            {/* <li>
              <a href="about" className="block py-2 text-second rounded-sm md:bg-transparent md:p-0 hover:text-primary"><span className='text-primary'>{'{'}</span>about<span className='text-primary'>{'}'}</span></a>
            </li>
            <li>
              <a href="#" className="block py-2 text-second rounded-sm md:bg-transparent md:p-0 hover:text-primary"><span className='text-primary'>{'{'}</span>portfolio<span className='text-primary'>{'}'}</span></a>
            </li>
            <li>
              <a href="#" className="block py-2 text-second rounded-sm md:bg-transparent md:p-0 hover:text-primary"><span className='text-primary'>{'{'}</span>contact<span className='text-primary'>{'}'}</span></a>
            </li> */}
            <li>
              <a href="#" className="block py-2 text-second rounded-sm md:bg-transparent md:p-0 hover:text-primary"><span className='text-primary'>{'{'}</span>blog<span className='text-primary'>{'}'}</span></a>
            </li>
            <li>
              <a href="#" className="block py-2 text-second rounded-sm md:bg-transparent md:p-0 hover:text-primary"><span className='text-primary'>{'{'}</span>login<span className='text-primary'>{'}'}</span></a>
            </li>
          </ul>
        </div>
        <div className={
          isMenuOpen
            ? `fixed left-0 w-[96%] top-10 sm:hidden h-screen bg-primary-background p-10 ease-in duration-500`
            : 'fixed left-[-100%] p-10'
        }>
          <ul className={`menu flex w-[90%] flex-col absolute bg-primary-background menuRendered`}>
            <li className="text-second text-sm font-semibold"
                style={{ transitionDelay: `${150}ms` }}>
                <a className="flex w-auto pb-4" href='#'><span>{'{'}</span> home <span>{'}'}</span></a>
            </li>
            {/* <li className="text-second text-sm font-semibold"
                style={{ transitionDelay: `${150 + 1 * 25}ms` }}>
                <a className="flex w-auto pb-4" href='#about'><span>{'{'}</span> about <span>{'}'}</span></a>
            </li>
            <li className="text-second text-sm font-semibold"
                style={{ transitionDelay: `${150 + 2 * 25}ms` }}>
                <a className="flex w-auto pb-4"><span>{'{'}</span> portfolio <span>{'}'}</span></a>
            </li>
            <li className="text-second text-sm font-semibold"
                style={{ transitionDelay: `${150 + 3 * 25}ms` }}>
                <a className="flex w-auto pb-4"><span>{'{'}</span> contact <span>{'}'}</span></a>
            </li> */}
            <li className="text-second text-sm font-semibold"
                style={{ transitionDelay: `${150 + 3 * 25}ms` }}>
                <a className="flex w-auto pb-4"><span>{'{'}</span> blog <span>{'}'}</span></a>
            </li>
            <li className="text-second text-sm font-semibold hover:text-primary"
                style={{ transitionDelay: `${150 + 3 * 25}ms` }}>
                <a className="flex w-auto pb-4"><span>{'{'}</span> login <span>{'}'}</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
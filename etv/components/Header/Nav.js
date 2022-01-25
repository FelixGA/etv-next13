import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";
const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navMenu = (
    // <ul className="flex flex-col lg:flex-row justify-around w-full text-grey-dark ">
    <ul
      className={
        isMobile
          ? "flex flex-col lg:flex-row justify-around items-center w-full h-1/2 text-grey-dark "
          : "flex flex-col lg:flex-row justify-around w-full text-[#93A3B7] "
      }
    >
      <li>
        <Link href="/homepage">
          <a
            className="text-[#E7E8EC]"
            onClick={() => {
              setIsMobile(false);
            }}
          >
            Start
          </a>
        </Link>
      </li>
      <li>
        <Link href="/Leichttransporter">
          <a
            onClick={() => {
              setIsMobile(false);
            }}
          >
            Leichttransporter
          </a>
        </Link>
      </li>
      <li>
        <Link href="/comparePage">
          <a
            onClick={() => {
              setIsMobile(false);
            }}
          >
            {" "}
            Transporter
          </a>
        </Link>
      </li>
      <li>
        <Link href="/Magazin">
          <a
            onClick={() => {
              setIsMobile(false);
            }}
          >
            Magazin
          </a>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-blue-dark flex flex-row justify-between items-center h-18 w-full">
      <span className="flex flex-row justify-between items-center">
        {" "}
        <div className="logo-container mt-2 ">
          <Image
            src="/images/etv-logo-final-white.png"
            width={80}
            height={60}
            className="logo"
          />
        </div>
        <p className="text-white text-xs hidden lg:flex">
          ELEKTROTRANSPORTER
          <br />
          VERGLEICH
        </p>
      </span>

      <div
        className={
          isMobile
            ? `absolute lg:hidden text-3xl top-18 z-50 animation-slideL bg-blue-dark box flex flex-col justify-between items-start h-full w-full sm:w-1/2 sm:right-0 `
            : " hidden lg:flex lg:flex-row lg:justify-between animation-slideR items-center box w-[70vw]"
        }
      >
        {navMenu}
      </div>
      <div className="flex flex-row justify-between items-center">
        <button className="bg-yellow-light hover:bg-yellow-dark text-grey-darker font-bold py-2 flex px-4 mb-3 m-4 text-sm rounded">
          <Image
            src="/images/iconStyle2x.png"
            width={18}
            height={18}
            layout="responsive"
          />
          <span className="px-2">Kaufberater</span>
        </button>

        <div
          onClick={() => setIsMobile(!isMobile)}
          className="ham-menu-container xs:pr-6 p-1 lg:invisible"
        >
          <div className="menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>

      {/* <StickyContainer /> */}
    </nav>
  );
};
export default Nav;

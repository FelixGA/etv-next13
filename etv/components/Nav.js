import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import StickyContainer from "./StickyContainer";

import Image from "next/image";
const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navMenu = (
    // <ul className="flex flex-col lg:flex-row justify-around w-full text-grey-dark ">
    <ul
      className={
        isMobile
          ? "flex flex-col lg:flex-row justify-around items-center w-full h-1/2 text-grey-dark "
          : "flex flex-col lg:flex-row justify-around w-full text-green-dark "
      }
    >
      <li>
        <Link href="/homepage">
          <a>Start</a>
        </Link>
      </li>
      <li>
        <Link href="/Leichttransporter">
          <a>Leichttransporter</a>
        </Link>
      </li>
      <li>
        <Link href="/Transporter">
          <a> Transporter</a>
        </Link>
      </li>
      <li>
        <Link href="/Magazin">
          <a>Magazin</a>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-blue-dark flex flex-row justify-between items-center w-[100vw]">
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
            ? `absolute lg:hidden text-3xl top-18 z-50 animation-slideL bg-blue-dark box flex flex-col justify-between items-start h-full w-full`
            : " hidden lg:flex lg:flex-row lg:justify-between animation-slideR items-center box w-[70vw]"
        }
      >
        {navMenu}
      </div>
      <div className="flex flex-row justify-between items-center">
        <button className="bg-yellow-dark hover:bg-yellow-light text-grey-darker font-bold p-2 mb-3 m-4 text-sm rounded-lg">
          Kaufberater
        </button>

        <div
          onClick={() => setIsMobile(!isMobile)}
          className="ham-menu-container xs:pr-6 p-1 lg:invisible"
        >
          <div class="menu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </div>

      {/* <StickyContainer /> */}
    </nav>
  );
};
export default Nav;

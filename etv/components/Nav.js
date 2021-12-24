import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import StickyContainer from "./StickyContainer";

import Image from "next/image";
const Nav = () => {
  const navMenu = (
    <ul className="flex flex-row justify-around w-full text-grey-dark ">
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
        <div className="logo-container mt-2">
          <Image
            src="/images/etv-logo-final-white.png"
            width={80}
            height={60}
            className="logo"
          />
        </div>
        <p className="text-white text-xs">
          ELEKTROTRANSPORTER
          <br />
          VERGLEICH
        </p>
      </span>

      <div className=" hidden laptop:flex laptop:flex-row laptop:justify-between items-center  w-[70vw]">
        {navMenu}
      </div>
      <div className="flex flex-row justify-between items-center">
        <button className="bg-yellow-dark hover:bg-yellow-light text-grey-darker font-bold p-2 mb-3 m-4 text-sm rounded-lg">
          Kaufberater
        </button>

        <div
          onClick={() => console.log("clicked")}
          className="ham-menu-container pr-6 p-1 laptop:invisible"
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

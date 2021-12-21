import React, { useState, useContext } from "react";
import Link from "next/link";
import StickyContainer from "./StickyContainer";
import { layoutGenerator } from "react-break";
import Image from "next/image";
const Nav = () => {
  const layout = layoutGenerator({
    mobile: 0,

    tablet: 768,
    desktop: 992,
  });
  //npm install react-break --save
  const OnMobile = layout.isAtMost("mobile");
  const OnAtLeastTablet = layout.isAtLeast("tablet");

  const OnDesktop = layout.is("desktop");

  const navMenu = (
    <ul>
      <li>
        <Link href="/homepage">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/eTv">
          <a>etv</a>
        </Link>
      </li>
      <li>
        <Link href="/something">
          <a> something</a>
        </Link>
      </li>
      <li>
        <Link href="/somethingelse">
          <a>somethingelse</a>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-blue-dark flex flex-row justify-between items-center">
      <div className="logo-container mt-2">
        <Image
          src="/images/etv-logo-final-white.png"
          width={80}
          height={60}
          className="logo"
        />
      </div>

      <OnAtLeastTablet>{navMenu}</OnAtLeastTablet>

      <OnDesktop> {navMenu}</OnDesktop>
      <div className="flex flex-row justify-between items-center">
        <button className="bg-yellow-dark hover:bg-yellow-light text-grey-darker font-bold p-2 mb-3 m-4 text-sm rounded-lg">
          Kaufberater
        </button>
        <OnMobile>
          <div
            onClick={() => console.log("clicked")}
            className="ham-menu-container pr-6 p-1"
          >
            <div class="menu">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        </OnMobile>
      </div>

      {/* <StickyContainer /> */}
    </nav>
  );
};
export default Nav;

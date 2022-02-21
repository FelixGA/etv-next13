import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  //
  /* const navMenuMobile = (
    // <ul className="flex flex-col lg:flex-row justify-around w-full text-grey-dark ">
    <ul className="flex flex-col lg:hidden lg:flex-row justify-around items-center w-full h-1/2 text-grey-dark ">
      <li>
        <Link href="/homepage">
          <a
            className="text-[#E7E8EC]"
            onClick={() => {
              setIsActive(false);
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
              setIsActive(false);
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
              setIsActive(false);
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
              setIsActive(false);
            }}
          >
            Magazin
          </a>
        </Link>
      </li>
      <li>
        <Link href="/Kontakt">
          <a
            onClick={() => {
              setIsActive(false);
            }}
          >
            Kontakt
          </a>
        </Link>
      </li>
    </ul>
  ); */
  return (
    <div className=" w-full ">
      <nav className=" ">
        <ul className="flex flex-row justify-around items-center w-full  text-grey-dark text-lg font-bold">
          <li>
            <Link href="/homepage">
              <a
                className="text-[#E7E8EC]"
                onClick={() => {
                  setIsActive(false);
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
                  setIsActive(false);
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
                  setIsActive(false);
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
                  setIsActive(false);
                }}
              >
                Magazin
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Kontakt">
              <a
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Kontakt
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;

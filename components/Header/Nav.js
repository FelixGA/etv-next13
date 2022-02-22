import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className=" w-full ">
      <nav className=" ">
        <ul className="flex justify-around items-center flex-1  text-blue-lighter text-lg font-bold">
          <li>
            <Link href="/">
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

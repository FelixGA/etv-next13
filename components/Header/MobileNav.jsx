import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function MobileNav(props) {
  return (
    <div className="relative bg-blue-darker w-full  h-screen  block pt-20">
      <ul className="flex flex-col items-center px-8 sm:items-start flex-1   h-3/5 justify-between text-grey-dark text-3xl ">
        <li className="">
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
        <li className="">
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
        <li className="">
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
        <li className="">
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
        <li className="">
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
    </div>
  );
}

export default MobileNav;

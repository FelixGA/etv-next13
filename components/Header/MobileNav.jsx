import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function MobileNav(props) {
  return (
    <div className="relative bg-blue-dark w-full  h-screen  block pt-20">
      <ul className="flex flex-col items-center w-full   h-2/3 justify-between text-grey-dark text-3xl ">
        <li className="pt-4">
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
        <li className="pt-4">
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
        <li className="pt-4">
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
        <li className="pt-4">
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
        <li className="pt-4">
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

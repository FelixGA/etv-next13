import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function MobileNav(props) {
  const router = useRouter();
  return (
    <div className="relative bg-blue-darker w-full h-screen ">
      <ul className="flex flex-col items-center sm:items-start sm:pl-16 flex-1 h-3/4 justify-evenly text-grey-dark text-3xl ">
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
          <Link href="/caradvisor">
            <a
              onClick={() => {
                setIsActive(false);
              }}
            >
              Kaufberater
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

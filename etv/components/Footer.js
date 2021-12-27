import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-5 lg:flex lg:flex-row-reverse lg:flex-wrap lg:justify-around">
      <nav className="flex flex-row justify-between flex-wrap my-10">
        <div className="flex w-48  flex-col justify-start flex-wrap  px-4">
          <h5 className=" text-sm font-bold">FIRST CATEGORY</h5>
          <ul className=" flex flex-col justify-between flex-wrap  m-4  text-black">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
        </div>
        <div className="flex w-48 flex-col justify-start flex-wrap  px-4">
          <h5 className=" text-sm font-bold">SECOND CATEGORY</h5>
          <ul className=" flex flex-col justify-between flex-wrap  m-4  text-black">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
        </div>
        <div className="flex w-48 flex-col justify-start flex-wrap  px-4">
          <h5 className=" text-sm font-bold">THIRD CATEGORY</h5>
          <ul className=" flex flex-col justify-between flex-wrap  m-4  text-black">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
        </div>
        <div className="flex w-48 flex-col justify-start flex-wrap  px-4">
          <h5 className=" text-sm  font-bold">FORTH CATEGORY</h5>
          <ul className=" flex flex-col justify-start flex-wrap ml-2 mt-4 text-black">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </div>
      </nav>
      <span className="lg:w-1/4 lg:pt-14">
        <div className="flex flex-row justify-start items-center w-full flex-wrap">
          <Image src="/images/etv-logo-final.png" width={60} height={40} />
          <p className="text-blue-dark text-base font-bold leading-4">
            {" "}
            Elektrotransporter
            <br />
            Vergleich
          </p>
        </div>
        <p className="p-3 ">
          Hier könnte noch etwas stehen, was Leute davon überzeugt, dass Ihr
          richtig gut seid!
        </p>
        <div className="flex flex-row justify-around w-full ">
          <Link href="/Leichttransporter">
            <a>
              <img
                className="opacity-50 "
                src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"
              />
            </a>
          </Link>
          <Link href="/Leichttransporter">
            <a>
              <img
                className="opacity-50 "
                src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
              />
            </a>
          </Link>
          <Link href="/Leichttransporter">
            <a>
              <img
                className="opacity-50 "
                src="https://img.icons8.com/ios-glyphs/30/000000/twitter.png"
              />
            </a>
          </Link>
        </div>
      </span>
    </footer>
  );
};
export default Footer;

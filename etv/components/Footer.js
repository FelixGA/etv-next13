import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="py-5">
      <nav className="flex flex-row justify-between flex-wrap my-10">
        <div className="flex flex-col justify-start flex-wrap  px-4">
          <h5 className=" text-sm font-bold">FIRST CATEGORY</h5>
          <ul className=" flex flex-col justify-between flex-wrap  m-4  text-black">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start flex-wrap  px-4">
          <h5 className=" text-sm font-bold">SECOND CATEGORY</h5>
          <ul className=" flex flex-col justify-between flex-wrap  m-4  text-black">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start flex-wrap  px-4">
          <h5 className=" text-sm font-bold">THIRD CATEGORY</h5>
          <ul className=" flex flex-col justify-between flex-wrap  m-4  text-black">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start flex-wrap  px-4">
          <h5 className=" text-sm font-bold">FORTH CATEGORY</h5>
          <ul className=" flex flex-col justify-start flex-wrap  m-4 text-black">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-row justify-start w-full flex-wrap">
        <Image src="/images/etv-logo-final.png" width={60} height={40} />
        <p className="text-blue-dark text-base font-bold leading-4">
          {" "}
          Elektrotransporter
          <br />
          Vergleich
        </p>
      </div>
      <p className="p-3">
        Hier könnte noch etwas stehen, was Leute davon überzeugt, dass Ihr
        richtig gut seid!
      </p>
    </footer>
  );
};
export default Footer;

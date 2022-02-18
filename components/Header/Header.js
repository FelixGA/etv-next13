import Nav from "../Header/Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";
import Link from "next/link";
const variants = {
  enter: {
    x: 1000,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 1000,
    opacity: 0,
  },
};
const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative print:hidden">
      <div className=" sticky top-0 z-30 bg-blue-darker flex flex-row justify-between items-center h-18 w-screen ">
        <Link href={`/`} passHref>
          <div className="flex flex-row pl-0 sm:pl-4 xl:pl-32 ">
            <div className="logo-container mt-2 w-20 ">
              <Image
                src="/images/etv-logo-final-white.png"
                width={80}
                height={60}
                className="logo"
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <div className=" items-center hidden sm:flex">
              <p className="text-white text-xs ">
                ELEKTROTRANSPORTER
                <br />
                VERGLEICH
              </p>
            </div>
          </div>
        </Link>
        <div className="hidden lg:block w-[50%]">
          <Nav />
        </div>
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              className=" lg:hidden w-full sm:w-96 absolute right-0 top-18  "
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween" }}
            >
              <MobileNav />
            </motion.div>
          )}
        </AnimatePresence>
        {/* BUTTON */}
        <div className="pr-20 lg:pr-8 xl:pr-32 ">
          <div className="bg-yellow-light hover:bg-orange-lighter text-grey-darker font-bold flex justify-evenly items-center h-9 w-28 xs:w-36 text-sm rounded cursor-pointer">
            <div className="w-6 xs:w-8 pl-2 ">
              <Image
                src="/images/iconStyle2x.png"
                width={18}
                height={18}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <span className="pr-3 text-xs xs:text-base">Kaufberater</span>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="ham-menu-container  lg:hidden  absolute top-6 right-6 z-40 "
      >
        <div className="menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};
export default Header;

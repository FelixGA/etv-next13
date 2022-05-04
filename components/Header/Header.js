import Nav from "../Header/Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useStore } from "../store";
import { useRouter } from "next/router";

const variants = {
  enter: {
    y: -5000,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -5000,
    opacity: 0,
  },
};
const Header = () => {
  const { state, dispatch } = useStore();
  const router = useRouter();
  return (
    <div className="relative shadow-card print:hidden z-90">
      <div className="sticky top-0 z-40 flex flex-row items-center justify-between w-full h-20 bg-blue-darker sm:h-24 2xl:px-40">
        <Link href={`/`} passHref>
          <div
            className="flex flex-row pl-2 cursor-pointer sm:pl-4 "
            onClick={() => {
              dispatch({
                type: "mobileNavActive",
                data: false,
              });
              dispatch({
                type: "rangeLithium",
                data: [],
              });
              dispatch({
                type: "loadingWeight",
                data: [],
              });
              dispatch({
                type: "price",
                data: [],
              });
              dispatch({
                type: "maxSpeed",
                data: [],
              });
              dispatch({
                type: "category",
                data: [],
              });
              dispatch({
                type: "chargingTimeLithium",
                data: [],
              });
            }}
          >
            <div className="w-16 mt-2 logo-container xl:w-28 ">
              <Image
                src="/images/etv-logo-final-white.png"
                width={80}
                height={60}
                className="logo"
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <div className="flex items-center pl-2 ">
              <p className="pt-1 text-xs text-white md:text-sm xl:text-lg ">
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
          {state?.mobileNavActives && (
            <motion.div
              className="absolute w-full h-screen top-20 lg:hidden sm:w-96 z-90"
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

        <div
          className={
            router.pathname !== "/caradvisor" ? "pr-18 lg:pr-6" : "hidden"
          }
        >
          <Link href="/caradvisor" passHref>
            <a>
              <div
                className="items-center hidden text-sm font-bold transition rounded cursor-pointer bg-yellow-light hover:bg-orange-lighter text-grey-darker md:flex justify-evenly h-9 w-28 xs:w-36 "
                onClick={() => {
                  dispatch({
                    type: "rangeLithium",
                    data: [],
                  });
                  dispatch({
                    type: "loadingWeight",
                    data: [],
                  });
                  dispatch({
                    type: "price",
                    data: [],
                  });
                  dispatch({
                    type: "maxSpeed",
                    data: [],
                  });
                  dispatch({
                    type: "category",
                    data: [],
                  });
                  dispatch({
                    type: "chargingTimeLithium",
                    data: [],
                  });
                }}
              >
                <div className="w-6 pl-2 xs:w-8 ">
                  <Image
                    src="/images/iconStyle2x.png"
                    width={18}
                    height={18}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <span className="pr-3 text-xs xs:text-base ">Kaufberater</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div
        onClick={() => {
          dispatch({
            type: "mobileNavActive",
            data: !state?.mobileNavActives,
          });
        }}
        className={
          router.pathname == "/caradvisor"
            ? "hidden"
            : "ham-menu-container absolute right-4 sm:top-9 top-7 lg:hidden z-40 "
        }
      >
        {/* <div className="relative" onClick={() => setHamState(!hamState)}>
          <div
            className={
              hamState
                ? "relative after:content-[''] after:w-6 after:bg-white after:h-[3px] after:absolute after:top-2 before:content-[''] before:w-6 before:bg-white before:h-[3px] before:absolute before:top-4 bg-white h-[3px] w-6"
                : "relative after:content-[''] after:w-6 after:bg-white after:h-[3px] after:absolute after:top-2 before:content-[''] before:w-6 before:bg-white before:h-[3px] before:absolute before:top-4 bg-white h-[3px] w-6 before:rotate-45 -rotate-90"
            }
          ></div>
        </div> */}
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

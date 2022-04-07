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
  const [hamState, setHamState] = useState(false);
  const { state, dispatch } = useStore();
  const router = useRouter();
  return (
    <div className="relative print:hidden ">
      <div className=" sticky top-0 z-30 bg-blue-darker flex flex-row justify-between items-center h-20 sm:h-24 w-full 2xl:px-40">
        <Link href={`/`} passHref>
          <div
            className="flex flex-row pl-2 sm:pl-4 cursor-pointer "
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
            <div className="logo-container mt-2 w-16 xl:w-28 ">
              <Image
                src="/images/etv-logo-final-white.png"
                width={80}
                height={60}
                className="logo"
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <div className=" items-center flex pl-2">
              <p className="text-white text-xs md:text-sm pt-1">
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
              className="lg:hidden w-full sm:w-96 absolute right-0 top-18 z-90 "
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
                className="bg-yellow-light hover:bg-orange-lighter text-grey-darker font-bold hidden md:flex justify-evenly items-center h-9 w-28 xs:w-36 text-sm rounded cursor-pointer "
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
                <div className="w-6 xs:w-8 pl-2 ">
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
            : "ham-menu-container absolute right-4 sm:top-9 top-7 md:hidden z-40 "
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

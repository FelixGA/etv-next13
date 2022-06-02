import Link from "next/link";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useStore } from "../store";
import navbarData from "../../data/navbarData";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: {
    height: 0,
    opacity: 0,
  },
  center: {
    height: "100vh",
    opacity: 1,
  },
  exit: {
    height: 0,
    opacity: 0,
  },
};

function MobileNav() {
  const router = useRouter();
  const { state, dispatch } = useStore();

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    dispatch({
      type: "mobileNavActive",
      data: false,
    });
  }, [router.pathname]);
  return (
    <AnimatePresence initial={false}>
      <motion.div
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ type: "tween" }}
        className="flex flex-col items-center justify-center h-[calc(100%-80px)] w-full bg-gradient-to-b from-blue-darker to-blue-dark z-90 pb-40"
      >
        <ul className="flex flex-col gap-14 justify-center text-[#928888] text-2xl tracking-widest ">
          {navbarData.map((item, index) => (
            <li
              className={
                router.pathname == item.path
                  ? "transition duration-100 text-white font-bold text-xl md:text-2xl text-center md:text-left"
                  : "transition duration-100 font-bold text-center md:text-left text-xl md:text-2xl"
              }
              key={index}
            >
              <Link href={item.path}>
                <a
                  onClick={() => {
                    setIsActive(false);
                    if (index == 0) {
                      {
                        setIsActive(false);
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
                      }
                    }
                  }}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default MobileNav;

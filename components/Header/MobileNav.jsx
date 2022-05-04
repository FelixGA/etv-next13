import Link from "next/link";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useStore } from "../store";

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
    <div className="flex flex-col items-center w-full bg-gradient-to-b from-blue-darker to-blue-dark z-90 h-[calc(100vh-70px)]">
      <ul className="flex flex-col items-center flex-1 gap-20 justify-center text-[#928888] text-2xl ">
        <li className="">
          <Link href="/">
            <a
              className="text-[#ffffff]"
              onClick={() => {
                dispatch({
                  type: "mobileNavActive",
                  data: !state?.mobileNavActives,
                });
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
              Start
            </a>
          </Link>
        </li>

        <li className="w-full text-center md:text-left">
          <Link href="/comparePage">
            <a
              className=""
              onClick={() => {
                dispatch({
                  type: "mobileNavActive",
                  data: !state?.mobileNavActives,
                });
              }}
            >
              Transporter-
              <br />
              Vergleich
            </a>
          </Link>
        </li>
        <li className="">
          <Link href="/caradvisor">
            <a
              onClick={() => {
                dispatch({
                  type: "mobileNavActive",
                  data: !state?.mobileNavActives,
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
              Kaufberater
            </a>
          </Link>
        </li>
        <li className="">
          <Link href="/magazin">
            <a
              onClick={() => {
                dispatch({
                  type: "mobileNavActive",
                  data: !state?.mobileNavActives,
                });
              }}
            >
              Magazin
            </a>
          </Link>
        </li>
        <li className="">
          <Link href="/kontakt">
            <a
              onClick={() => {
                dispatch({
                  type: "mobileNavActive",
                  data: !state?.mobileNavActives,
                });
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

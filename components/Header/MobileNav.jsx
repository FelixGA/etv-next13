import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useStore } from "../store";

function MobileNav() {
  const router = useRouter();
  const { state, dispatch } = useStore();
  const [isOpen, setIsOpen] = useState({
    key: false,
  });
  // useEffect(() => {
  //   if (state.mobileNavActives) {
  //     // dispatch({
  //     //   type: "mobileNavActive",
  //     //   data: !state?.mobileNavActives,
  //     // });

  //     console.log("mobileNavActives", state.mobileNavActives);
  //   }
  // }, [isOpen.key, router.pathname]);
  return (
    <div className="relative bg-blue-darker w-full h-screen z-90">
      <ul className="flex flex-col items-center sm:items-start sm:pl-16 flex-1 h-3/4 justify-evenly text-grey-dark text-3xl ">
        <li className="">
          <Link href="/">
            <a
              className="text-[#E7E8EC]"
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
        <li className="">
          <Link href="/fahrzeuge">
            <a
              onClick={() => {
                dispatch({
                  type: "mobileNavActive",
                  data: !state?.mobileNavActives,
                });
              }}
            >
              {" "}
              Transporter
            </a>
          </Link>
        </li>
        <li className="w-full text-center md:text-left">
          <Link href="/comparePage">
            <a
              className=" "
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

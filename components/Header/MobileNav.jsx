import Link from "next/link";

import { useRouter } from "next/router";
import { useStore } from "../store";
function MobileNav() {
  const router = useRouter();
  const { state, dispatch } = useStore();
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
        <li className="">
          <Link href="/caradvisor">
            <a
              onClick={() => {
                dispatch({
                  type: "mobileNavActive",
                  data: !state?.mobileNavActives,
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
          <Link href="/Kontakt">
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

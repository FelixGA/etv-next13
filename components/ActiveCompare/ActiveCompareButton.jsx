import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// const { cartitle } = router.query;

export default function ActiveCompareButton(props) {
  const router = useRouter();

  return (
    <div>
      {props.comparedCars.map((item, index) => (
        <div key={index}>
          <div className="  lg:w-64 xl:w-88 2xl:w-[380px] p-4">
            <button className="h-8 w-full  bg-orange-lighter rounded-[5px]">
              <Link href={`/transporter/${item?.name}`}>
                <a className="visited:text-blue-darker">Weiter</a>
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

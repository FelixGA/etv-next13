import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
// const { cartitle } = router.query;

function ActiveCompareButton(props) {
  const router = useRouter();

  const carsData3 = props.comparedCars.map((item, index) => (
    <div key={uuidv4()}>
      <div className="  lg:w-64 xl:w-88 2xl:w-[380px] p-4">
        <button className="h-8 w-full  bg-orange-lighter rounded-[5px]">
          <Link href={`/transporter/${item?.title}`}>
            <a className="visited:text-blue-darker">Weiter</a>
          </Link>
        </button>
      </div>
    </div>
  ));

  return carsData3;
}

export default ActiveCompareButton;

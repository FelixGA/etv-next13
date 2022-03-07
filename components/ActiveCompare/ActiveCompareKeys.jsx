import Link from "next/link";

export default function ActiveCompareKeys({ getKeys, comparedCars }) {
  return (
    /* BUTTON AND IMAGES AND COMPARE CATEGORIES  <>VISIBLE IN MOBILE VIEW<> */
    //
    <>
      <div className={comparedCars.length ? "w-full border-r" : "hidden"}>
        <div className="h-36 md:h-40 md:w-full lg:h-64 xl:h-72  bg-grey-lighter">
          {/* BACK BUTTON */}
          <div className="lg:w-64 xl:w-88 2xl:w-[380px] hidden lg:block pt-12 pl-8 lg:pl-4 xl:pl-8">
            <button className="text-sm bg-white w-52 h-10 rounded-md text-blue-darker ">
              <Link href="/comparePage">
                <a className="visited:text-blue-darker">
                  « zurück zur Ergebnisliste
                </a>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex items-center flex-1 bg-white pt-4 md:pt-8 lg:pt-16 xl:pt-14 pl-4 lg:pl-8 px-2">
          <h3 className="text-blue-extra text-xl font-bold ">Grundlagen</h3>
        </div>
        {getKeys
          .map((item, index) => (
            <div
              key={index}
              className={
                index % 2 == 0
                  ? "flex items-center h-10 flex-1 bg-grey-lighter"
                  : "flex items-center h-10 flex-1 bg-white"
              }
            >
              <h3 className=" text-blue-extra text-sm lg:text-lg pl-4 lg:pl-8">
                {item}
              </h3>
            </div>
          ))
          .splice(0, 11)}

        {/* <div className="w-[105%] bg-[#D0DDEA] h-20"></div> */}
      </div>
    </>
  );
}

import Link from "next/link";

export default function ActiveCompareKeys({ getKeys, comparedCars }) {
  return (
    /* BUTTON AND IMAGES AND COMPARE CATEGORIES  <>VISIBLE IN MOBILE VIEW<> */
    <>
      <div
        className={
          comparedCars.length ? "w-full border-r-2 shadow-xl " : "hidden"
        }
      >
        <div className="h-36 lg:h-72 bg-grey-lighter">
          {/* BACK BUTTON */}
          <div className="lg:w-64 xl:w-88 2xl:w-[380px] hidden lg:block pt-12 pl-4">
            <button className="text-sm bg-white w-52 h-10 rounded-md text-blue-darker ">
              <Link href="/comparePage">
                <a className="visited:text-blue-darker">
                  « zurück zur Ergebnisliste
                </a>
              </Link>
            </button>
          </div>
        </div>
        <div className="flex items-center flex-1 bg-white pt-11 lg:pt-9 px-4">
          <h3 className="text-blue-extra text-xl ">Grundlagen</h3>
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
              <h3 className=" text-blue-extra text-sm lg:text-lg px-4">
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

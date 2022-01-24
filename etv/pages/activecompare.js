import { gql, useQuery } from "@apollo/client";
import { useStore } from "../components/store";
import Image from "next/image";
import image from "../public/images/ari_458_pritsche_frontansicht_6e125d42d4.jpg";
import ActiveCompareCard from "../components/ActiveCompare/ActiveCompareCard";

function activecompare() {
  const myLoader = ({ src }) => {
    return src;
  };
  const { state, dispatch } = useStore();
  let comparedCars = state?.autoForComparisons?.map((el) => el.auto);
  console.log(comparedCars);
  return (
    <div className="wrapper">
      <div className="heading  pt-8 pb-12 pl-[5vw]">
        <h1 className="font-bold  text-[#2C3F53] text-2xl lg:text-4xl">
          Ihre Auswahl im Detailvergleich
        </h1>
        {/* BUTTON VISIBLE ONLY ON MOBILE */}
        <div className="w-fit xl:hidden mt-4">
          <button className="   bg-[#E7EDF3] w-56 h-10 rounded-md text-[#1F1E80] font-medium">
            « zurück zur Ergebnisliste
          </button>
        </div>
      </div>
      {/* BUTTON AND IMAGES <>VISIBLE IN DESKTOP VIEW<> */}
      <div className="btn+img w-full h-60 bg-[#E7EDF3] hidden xl:grid grid-cols-[1/4_minmax(250px,_1fr)] grid-flow-col   scrollbar-hide justify-center gap-8 items-center">
        <div className="w-56 lg:w-full  xl:w-88 2xl:w-[287px]">
          <button className="mb-32 2xl:mb-36 text-sm bg-white w-52 h-10 rounded-md text-[#1F1E80]">
            « zurück zur Ergebnisliste
          </button>
        </div>
        <div className="lg:w-64 xl:w-88 2xl:w-[287px]">
          <Image
            className="rounded-md md:rounded-lg brightness-50 "
            loader={myLoader}
            src={
              image
            } /* {`http://localhost:1337${caritem.photo.data[0].attributes.url}`} */
            alt="picture"
            objectFit="cover"
            width={100.35}
            height={66.9}
            layout="responsive"
          />
        </div>
        <div className="lg:w-64 xl:w-88 2xl:w-[287px]">
          <Image
            className="rounded-md md:rounded-lg brightness-50 "
            loader={myLoader}
            src={
              image
            } /* {`http://localhost:1337${caritem.photo.data[0].attributes.url}`} */
            alt="picture"
            objectFit="cover"
            width={100.35}
            height={66.9}
            layout="responsive"
          />
        </div>
        <div className="lg:w-64 xl:w-88 2xl:w-[287px]">
          <Image
            className="rounded-md md:rounded-lg brightness-50 "
            loader={myLoader}
            src={
              image
            } /* {`http://localhost:1337${caritem.photo.data[0].attributes.url}`} */
            alt="picture"
            objectFit="cover"
            width={100.35}
            height={66.9}
            layout="responsive"
          />
        </div>
      </div>
      {/* BUTTON AND IMAGES AND COMPARE CATEGORIES  <>VISIBLE IN MOBILE VIEW<> */}
      <div className="data-content-wrapper grid grid-flow-col grid-cols-[1/4_minmax(200px,_1fr)] w-full bg-red-500 border-2 xl:hidden">
        <div className="data-content-categories bg-blue-500">
          <div className="placeholder-image-clone  h-16 bg-yellow-400"></div>
          <div className="first-category">
            <h3 className="first-category-title">Grundlagen</h3>
          </div>
          <div className="second-category">
            <h3 className="second-category-title">Reichweite</h3>
          </div>
          <div className="third-category">
            <h3 className="third-category-title">Zuladung</h3>
          </div>
          <div className="forth-category">
            <h3 className="forth-category-title">Ladezeit</h3>
          </div>
          <div className="fifth-category">
            <h3 className="fifth-category-title">Höchst- geschwindigkeit</h3>
          </div>
          <div className="sixth-category">
            <h3 className="sixth-category-title">Nutzlastpreis</h3>
          </div>
          <div className="seventh-category">
            <h3 className="seventh-category-title">Kaufpreis</h3>
          </div>
          <div className="eigth-category">
            <h3 className="eigth-category-title">Ausstattung</h3>
          </div>
          <div className="ninth-category">
            <h3 className="ninth-category-title">Elektrische Fensterheber</h3>
          </div>
          <div className="ten-category">
            <h3 className="ten-category-title">ABS</h3>
          </div>
          <div className="eleven-category">
            <h3 className="eleven-category-title">Airbags</h3>
          </div>
          <div className="twelwe-category">
            <h3 className="twelwe-category-title">Klimaanlage</h3>
          </div>
          <div className="thirtine-category">
            <h3 className="thirtine-category-title">Goldene Wasserhähne</h3>
          </div>
        </div>
        <div className="data-content-values w-fit">some values</div>
      </div>
      {/* BUTTON AND IMAGES AND COMPARE CATEGORIES  <>VISIBLE IN DESKTOP VIEW<> */}
      <div className="data-content-wrapper  h-60   xl:w-88 2xl:w-[287px] hidden xl:grid grid-cols-[1/4_minmax(250px,_1fr)] grid-flow-col   scrollbar-hide justify-center gap-8 items-center">
        <div className="data-content-categories bg-blue-500  w-56 lg:w-full">
          <div className="placeholder-image-clone  h-16 bg-yellow-400"></div>
          <div className="first-category">
            <h3 className="first-category-title">Grundlagen</h3>
          </div>
          <div className="second-category">
            <h3 className="second-category-title">Reichweite</h3>
          </div>
          <div className="third-category">
            <h3 className="third-category-title">Zuladung</h3>
          </div>
          <div className="forth-category">
            <h3 className="forth-category-title">Ladezeit</h3>
          </div>
          <div className="fifth-category">
            <h3 className="fifth-category-title">Höchst- geschwindigkeit</h3>
          </div>
          <div className="sixth-category">
            <h3 className="sixth-category-title">Nutzlastpreis</h3>
          </div>
          <div className="seventh-category">
            <h3 className="seventh-category-title">Kaufpreis</h3>
          </div>
          <div className="eigth-category">
            <h3 className="eigth-category-title">Ausstattung</h3>
          </div>
          <div className="ninth-category">
            <h3 className="ninth-category-title">Elektrische Fensterheber</h3>
          </div>
          <div className="ten-category">
            <h3 className="ten-category-title">ABS</h3>
          </div>
          <div className="eleven-category">
            <h3 className="eleven-category-title">Airbags</h3>
          </div>
          <div className="twelwe-category">
            <h3 className="twelwe-category-title">Klimaanlage</h3>
          </div>
          <div className="thirtine-category">
            <h3 className="thirtine-category-title">Goldene Wasserhähne</h3>
          </div>
        </div>
        <div className="data-content-values w-fit">some values</div>
      </div>
      <div>second compare section</div>
      <div>CTA button</div>
    </div>

    /* OLD VERSION */
    // <div className="wrapper w-full  ">
    //   <div className="">
    //     <h1 className="font-bold  text-[#2C3F53] text-2xl xl:text-3xl text-left pl-4 pt-10">
    //       Ihre Auswahl im Detailvergleich
    //     </h1>
    //   </div>
    //   <div className="p-4 rounded-lg">
    //     <button
    //       type="button"
    //       className="bg-[#E7EDF3] w-44 h-8 text-xs font-bold text-[#1F1E80] cursor-pointer"
    //     >
    //       « zurück zur Ergebnisliste
    //     </button>
    //   </div>
    //   {/* LEFT SIDE BAR + ACTIVE COMPARE SECTION (UP TO 3 AUTOS) */}
    //   <div className="grid grid-cols-[160px_minmax(200px,_1fr)] xl:grid-cols-[300px_minmax(200px,_1fr)] grid-flow-col  overflow-x-scroll scrollbar-hide w-[100vw] xl:w-[80vw] xl:mx-auto">
    //     {/* LEFT SIDE BAR */}
    //     <div className="flex flex-col shadow-2xl border-r w-full relative ">
    //       {/* FIRST SECTION */}
    //       <div className="w-[105%] h-10 bg-[#ffffff] z-20 absolute "></div>
    //       <div className="w-full h-[152px] sm:h-[174px] md:h-[206px] lg:h-[227px] xl:h-[270px] bg-[#F2F5F8] z-10 "></div>
    //       <div className="flex items-center w-full h-10 p-4 pl-5 xl:pt-[77px]">
    //         <h2 className="text-md xl:text-md font-bold text-[#2C3F53]">
    //           Grundlagen
    //         </h2>
    //       </div>
    //       <div className="flex items-center h-10 p-4 pl-5  bg-[#F2F5F8]">
    //         <h3 className="text-sm font-medium text-[#2C3F53]">Reichweite</h3>
    //       </div>
    //       <div className="flex items-center h-10 p-4 pl-5 ">
    //         <h3 className="text-sm font-medium text-[#2C3F53]">Zuladung</h3>
    //       </div>
    //       <div className="flex items-center h-10 p-4 pl-5 bg-[#F2F5F8]">
    //         <h3 className="text-sm font-medium text-[#2C3F53]">Ladezeit</h3>
    //       </div>
    //       <div className="flex items-center h-10 p-4 pl-5 ">
    //         <h3 className="text-sm font-medium text-[#2C3F53]">
    //           Höchst- geschwindigkeit
    //         </h3>
    //       </div>
    //       <div className="flex items-center h-10 p-4 pl-5 bg-[#F2F5F8]">
    //         <h3 className="text-sm font-medium text-[#2C3F53]">
    //           Nutzlastpreis
    //         </h3>
    //       </div>
    //       <div className="flex items-center h-10 p-4 pl-5 ">
    //         <h3 className="text-sm font-medium text-[#2C3F53]">Kaufpreis</h3>
    //       </div>
    //       {/* SECOND SECTION */}
    //       <div className="md:pt-16">
    //         <div className="flex items-center   h-10 p-4 pl-5 bg-[#F2F5F8] lg:bg-white">
    //           <h2 className="text-md xl:text-md font-bold text-[#2C3F53]">
    //             Ausstattung
    //           </h2>
    //         </div>
    //         <div className="flex items-center h-10 p-4 pl-5 bg-white lg:bg-[#F2F5F8]">
    //           <h3 className="text-sm font-medium text-[#2C3F53]">
    //             Elektrische Fensterheber
    //           </h3>
    //         </div>
    //         <div className="flex items-center h-10 p-4 pl-5 bg-[#F2F5F8] lg:bg-white">
    //           <h3 className="text-sm font-medium text-[#2C3F53]">ABS</h3>
    //         </div>
    //         <div className="flex items-center h-10 p-4 pl-5 bg-white lg:bg-[#F2F5F8]">
    //           <h3 className="text-sm font-medium text-[#2C3F53]">Airbags</h3>
    //         </div>
    //         <div className="flex items-center h-10 p-4 pl-5 bg-[#F2F5F8] lg:bg-white">
    //           <h3 className="text-sm font-medium text-[#2C3F53]">
    //             Klimaanlage
    //           </h3>
    //           <div></div>
    //         </div>

    //         <div className="flex items-center h-10 p-4 pl-5 bg-white lg:bg-[#F2F5F8]">
    //           <h3 className="text-xs font-medium text-[#2C3F53]">
    //             Goldene Wasserhähne
    //           </h3>
    //         </div>
    //       </div>
    //       <div className="bg-[#D0DDEA]  w-full h-24 xl:mt-20"></div>
    //     </div>
    //     {/* ACTIVE COMPARE SECTION (UP TO 3 AUTOS) */}

    //     <div className=" flex w-full   pt-12">
    //       <ActiveCompareCard comparedCars={comparedCars} />
    //     </div>
    //   </div>
    // </div>
  );
}

export default activecompare;

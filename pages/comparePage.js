import FilterBlock from "../components/FilterItems/ActiveFilterBlock";
import ResultList from "../components/ResultList/ResultList";
import FiltersDesktop from "../components/FilterItems/FiltersDesktop";
import { useStore } from "../components/store";
import StickyPopUpForComparison from "../components/ResultList/StickyPopUpForComparison";
import { useState } from "react";

export default function comparePage() {
  const [open, setOpen] = useState(false)
  /* ɢᴇᴛ ʀᴇsᴜʟᴛs ᴜᴘᴏɴ ᴄᴀᴛᴇɢᴏʀʏ */
  
  /* ɢᴇᴛ ᴀʟʟ ᴄᴀᴛᴇɢᴏʀɪᴇs ғʀᴏᴍ ᴛʜᴇ ᴅᴀᴛᴀ */
  

  /* PRICE SORTING */
 

  // const convertPriceToNumber = (price) => {
  //   return parseFloat(price.replace(/[^0-9.-]+/g, ""));
  // };



  // get the cheapest auto
  // const getCheapest = getCarslowestPrice?.slice(0, 1);
  // get the most expensive auto
  // const getHighest = getCarshighestPrice?.slice(0, 1);
  /* cᴀʀs ᴡᴇɪɢʜᴛ ғɪʟᴛᴇʀ */

  /* ᴄᴀʀs ʀᴀɴɢᴇ ғɪʟᴛᴇʀ */

 
  /* ᴄᴀʀs ᴄʜᴀʀɢɪɴɢ ᴛɪᴍᴇ ғɪʟᴛᴇʀ */


  const { state, dispatch } = useStore();

  /* initial value */


  /* ɢᴇᴛ ʀᴇsᴜʟᴛs from sorting */


  return (
    <>
      <div className=" xl:mx-32 bg-white z-90">
        <div className="flex ">
          <div className="flex-1 hidden md:block  md:mt-14 md:pr-4  ">
            <FiltersDesktop />
          </div>
          <div className="flex flex-col md:w-3/4 w-full ">
            <FilterBlock />
            <ResultList  />
          </div>
        </div>
      </div>
      <StickyPopUpForComparison />
    </>
  );
}

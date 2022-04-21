// import Image from "next/image";
// // import FAQIcon from "../../icons/FAQIcon.js";
// // import FundingIcon from "../../icons/FundingIcon.js";
// // import ReferencesIcon from "../../icons/ReferencesIcon.js";
// // import NewsIcon from "../../icons/NewsIcon.js";

// export default function LinkTile({
//   linkReference,
//   linkNews,
//   linkFunding,
//   linkFaq,
//   textReference,
//   textNews,
//   textFunding,
//   textFaq,
// }) {
//   return (
//     <div className="min-h-[250px] bg-gradient-to-t from-green-dark to-green-light text-white flex flex-col items-start justify-evenly object-contain">
//       {linkReference && (
//         <div className="flex flex-row items-center pl-8 font-bold w-full hover:translate-x-2 duration-100">
//           {/* <ReferencesIcon className="w-6 h-6" /> */}
//           <a className="mx-6" href={linkReference}>
//             {textReference}
//           </a>
//         </div>
//       )}
//       {linkNews && (
//         <div className="flex flex-row items-center pl-8 font-bold w-full hover:translate-x-2 duration-100">
//           {/* <NewsIcon className="w-6 h-6 text-white fill-current" /> */}
//           <a className="mx-6" href={linkNews}>
//             {textNews}
//           </a>
//         </div>
//       )}
//       {linkFunding && (
//         <div className="flex flex-row items-center pl-8 font-bold w-full hover:translate-x-2 duration-100">
//           {/* <FundingIcon className="w-6 h-6" /> */}
//           <a className="mx-6" href={linkFunding}>
//             {textFunding}
//           </a>
//         </div>
//       )}
//       {linkFaq && (
//         <div className="flex items-center pl-8 font-bold w-full hover:translate-x-2 duration-100">
//           {/* <FAQIcon className="w-6 h-6" /> */}
//           <a className="mx-6" href={linkFaq}>
//             {textFaq}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

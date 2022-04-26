import Image from "next/image";
import Link from "next/link";
// import FAQIcon from "../../icons/FAQIcon.js";
// import FundingIcon from "../../icons/FundingIcon.js";
// import ReferencesIcon from "../../icons/ReferencesIcon.js";
// import NewsIcon from "../../icons/NewsIcon.js";

export default function LinkTile({ category }) {
  // remove dublications from the categories list
  const categories = [...new Set(category.map((post) => post.category))];

  return (
    <div className="min-h-[250px] bg-gradient-to-t from-blue-dark to-blue-light text-white flex flex-col items-start justify-evenly object-contain">
      {categories.map((category, index) => (
        <div
          className="flex flex-row items-center pl-8 font-bold w-full hover:translate-x-2 duration-100"
          key={index}
        >
          {/* <ReferencesIcon className="w-6 h-6" /> */}
          <Link href={`/magazin/${category}`}>
            <a className="mx-6">{category}</a>
          </Link>
        </div>
      ))}

      {/* {category && (
        <div className="flex flex-row items-center pl-8 font-bold w-full hover:translate-x-2 duration-100">
          <ReferencesIcon className="w-6 h-6" />
          <a className="mx-6" href="/neuigkeiten">
            neuigkeiten
          </a>
        </div>
      )}
      {category && (
        <div className="flex flex-row items-center pl-8 font-bold w-full hover:translate-x-2 duration-100">
          <NewsIcon className="w-6 h-6 text-white fill-current" />
          <a className="mx-6" href="/neuigkeiten">
            neuigkeiten
          </a>
        </div>
      )}
      {category && (
        <div className="flex flex-row items-center pl-8 font-bold w-full hover:translate-x-2 duration-100">
          <FundingIcon className="w-6 h-6" />
          <a className="mx-6" href="/neuigkeiten">
            neuigkeiten
          </a>
        </div>
      )}
      {category && (
        <div className="flex items-center pl-8 font-bold w-full hover:translate-x-2 duration-100">
          <FAQIcon className="w-6 h-6" />
          <a className="mx-6" href="/neuigkeiten">
            neuigkeiten
          </a>
        </div>
      )} */}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import RatingBox from "../../components/repeated/RatingBox";
import styles from "./Details.module.css";
import { MDXRemote } from "next-mdx-remote";
import { FaArrowCircleLeft } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import StarsRating from "../repeated/StarsRating";

const Articles = ({
  getCarsReview,
  carItem,
  getTestReview,
  getBlogContext,
}) => {
  return (
    <>
      <div className="relative flex flex-col justify-center p-4 print:hidden bg-grey-lighter lg:flex-row 2xl:px-44">
        {/*      <div className="relative w-full m-auto lg:w-1/3">
          <Image
            src={carItem?.src}
            alt={carItem?.title}
            width={195}
            height={140}
            layout="responsive"
            objectFit="contain"
            className="rounded-l-lg"
          />
          <div className="absolute bottom-0 right-0 flex scale-75 md:p-4">
            <RatingBox carItem={carItem} />
          </div>
        </div> */}
        <StarsRating stars={2.5} />
        <div className="flex flex-col flex-wrap lg:w-2/3 lg:px-6">
          <h3 className="w-full py-4 mt-4 text-2xl font-bold text-black-darkest">
            Testbericht von {carItem.title}
          </h3>
          <div className="">
            {getTestReview ? (
              <div>
                {getTestReview.map((review, index) => (
                  <div key={index} className="mb-8">
                    {/*     <MDXRemote {...review} /> */}
                  </div>
                ))}
                {/* rg */}
                {getCarsReview.content.map((infos, index) => (
                  <div key={index} className="relative mb-8">
                    <div className="relative left-0 flex ">
                      <h2>{infos.title}</h2>

                      <div className="pt-1 pl-1">
                        <AiOutlineStar size={25} color="#FFAB00" />
                      </div>
                    </div>

                    <MDXRemote {...getTestReview[index]} />

                    {infos?.image && (
                      <div className="w-full">
                        <Image
                          src={infos.image}
                          alt="ff"
                          width={195}
                          height={140}
                          layout="responsive"
                          objectFit="contain"
                          className="rounded-l-lg"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              "kommt bald"
            )}
          </div>
          {/* {getCarsReview && (
            <Link href={`/magazin/reviews/${getCarsReview?.slug}`}>
              <a target="_blank" className="text-blue-500">
                <button
                  // disabled={getTestReview ? true : false}
                  className="flex items-center justify-center w-48 my-6 text-white rounded-md bg-blue-dark h-14 print:hidden"
                >
                  Testbericht lesen
                </button>
              </a>
            </Link>
          )} */}
        </div>
      </div>
      {/* other articles section */}
      {/* First Article */}{" "}
      <div className="flex flex-col w-full p-4 mt-4 mb-4 bg-white lg:flex-row-reverse 2xl:px-44 print:hidden">
        {getBlogContext?.src && (
          <div className="relative w-full m-auto mt-4 mr-4 border-t lg:w-1/2 print:hidden lg:rounded-r-md">
            <Link href={`/magazin/${getBlogContext?.slug}`} passHref>
              <a target="_blank ">
                <Image
                  src={getBlogContext?.src}
                  alt={getBlogContext?.title}
                  width={195}
                  height={140}
                  layout="responsive"
                  objectFit="cover"
                  className=" lg:rounded-r-md"
                />
              </a>
            </Link>
          </div>
        )}
        <div className="flex flex-col flex-wrap lg:w-1/2">
          <h3 className="w-full pt-8 pb-4 text-2xl font-bold lg:pt-2 text-black-darkest">
            <Link
              href={`/magazin/${getBlogContext?.category}/${getBlogContext?.slug}`}
            >
              <a target="_blank">{getBlogContext?.title}</a>
            </Link>
          </h3>
          {getBlogContext?.title ? (
            <div className="lg:pr-8 ">
              <MDXRemote {...getBlogContext.source} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Articles;

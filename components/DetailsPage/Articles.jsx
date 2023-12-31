import Image from "next/image";
import Link from "next/link";

import styles from "./Articles.module.css";
import { MDXRemote } from "next-mdx-remote";

import StarsRating from "../repeated/StarsRating";
import TestVerdict from "../repeated/TestVerdict";

const Articles = ({
  getCarsReview,
  carItem,
  getTestReview,
  getBlogContext,
  getAllReviews,
}) => {
  let reviewDate = getCarsReview.publishedAt;

  /* GET THE STAR */
  return (
    <>
      <div className="relative flex flex-col justify-center py-4 print:hidden bg-grey-lighter lg:flex-row" itemScope
    itemType="https://schema.org/Article" itemProp="articleBody">
        <div className="flex flex-col flex-wrap lg:w-[50%] w-full" itemProp="articleSection">
          <h3 className="w-full px-4 mt-4 text-2xl font-bold lg:text-3xl text-black-darkest" itemProp="headline">
            Testbericht von {carItem.title}
          </h3>
          <div className="">
            {getTestReview ? (
              <div className="mb-8">
                {/* rg */}
                {getCarsReview?.content?.map((infos, index) => (
                  <div
                    key={index}
                    className={`${styles.articles} "relative mb-8 "`}
                  >
                    <div className="relative top-0 left-0 flex flex-col xs:flex-row ">
                      <h4 className="px-4 pt-2 font-bold lg:text-2xl xs:py-4 text-blue-dark">
                        {infos.title}
                      </h4>

                      <div className="px-4 pt-3 lg:pt-4 xl:pt-5 xs:pl-2">
                        {infos.stars ? (
                          <StarsRating stars={infos.stars} />
                        ) : null}
                      </div>
                    </div>
                    <div className="pt-2">
                      <MDXRemote {...getTestReview[index]} />
                    </div>

                    {infos?.image && (
                      <div className="block px-4">
                        <Image
                          src={infos.image}
                          alt="ff"
                          width={200}
                          height={150}
                          layout="responsive"
                          objectFit="contain"
                          itemProp="image"
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
        </div>
      </div>
      <div className="flex justify-center my-8">
        <TestVerdict
          carItem={carItem}
          getAllReviews={getAllReviews}
          reviewDate={reviewDate}
        />
      </div>
      {/* other articles section */}
      {/* First Article */}{" "}
      {getBlogContext?.src && (
        <div className="flex flex-col w-full bg-white lg:flex-row-reverse 2xl:px-56 print:hidden">
          {getBlogContext?.src && (
            <div className="relative w-full px-4 pt-4 m-auto mr-4 border-t lg:border-none lg:w-1/2 print:hidden lg:rounded-r-md">
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
            <h3 className="w-full px-4 pt-8 pb-4 text-2xl font-bold lg:pt-2 text-black-darkest">
              <Link
                href={`/magazin/${getBlogContext?.category}/${getBlogContext?.slug}`}
              >
                <a target="_blank">{getBlogContext?.title}</a>
              </Link>
            </h3>
            {getBlogContext?.title ? (
              <div className={`${styles.articles} "mb-8 lg:pr-8"`}>
                <MDXRemote {...getBlogContext.source} />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};
export default Articles;

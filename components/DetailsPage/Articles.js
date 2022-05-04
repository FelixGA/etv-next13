import Image from "next/image";
import Link from "next/link";
import RatingBox from "../../components/repeated/RatingBox";
import styles from "./Details.module.css";
import { MDXRemote } from "next-mdx-remote";

const Articles = ({ carItem, getTestReview, getBlogContext }) => {
  return (
    <>
      <div className="relative flex flex-col p-4 border-4 bg-grey-lighter lg:flex-row 2xl:px-44">
        <div className="relative w-full m-auto lg:w-1/3">
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
        </div>
        <div className="flex flex-col flex-wrap lg:w-2/3 lg:px-6">
          <h3 className="w-full py-4 text-2xl font-bold text-black-darkest ">
            Testbericht von {carItem.title}
          </h3>
          <div className="">
            {getTestReview ? (
              <div>
                {getTestReview.map((review) => (
                  <div key={review.id}>
                    <MDXRemote {...review} />
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
      <div className="flex flex-col w-full p-4 bg-white lg:flex-row-reverse lg:p-18">
        {getBlogContext?.src && (
          <div className="relative w-full m-auto lg:w-1/3 print:hidden">
            <Link href={`/magazin/${getBlogContext?.slug}`} passHref>
              <a target="_blank">
                <Image
                  src={getBlogContext?.src}
                  alt={getBlogContext?.title}
                  width={195}
                  height={140}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-l-lg"
                />
              </a>
            </Link>
          </div>
        )}
        <div className="flex flex-col flex-wrap lg:w-2/3 lg:px-6">
          <h3 className="w-full py-4 text-2xl font-bold text-black-darkest">
            <Link
              href={`/magazin/${getBlogContext?.category}/${getBlogContext?.slug}`}
            >
              <a target="_blank">{getBlogContext?.title}</a>
            </Link>
          </h3>
          {getBlogContext?.title ? (
            <p>
              <MDXRemote {...getBlogContext.source} />
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Articles;

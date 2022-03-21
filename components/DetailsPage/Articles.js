import Image from "next/image";
import RatingBox from "../../components/ResultList/RatingBox";
import styles from "./Details.module.css";
import { MDXRemote } from "next-mdx-remote";

const Articles = ({ carItem, getMarkdownContext }) => {
  return (
    <>
      <div
      // className={styles.mdxstyles}
      >
        {/* <MDXRemote {...getMarkdownContext} /> */}
      </div>
      {/* <div className="bg-grey-lighter flex lg:flex-row flex-col w-full p-4 lg:p-18">
        <div className=" lg:w-1/3 w-full m-auto relative bg-red-500 ">
          <Image
            src={carItem?.src}
            alt={carItem?.title}
            width={195}
            height={140}
            layout="responsive"
            objectFit="contain"
            className="rounded-l-lg"
          />
          <div className="ml-auto w-full flex flex-row-reverse absolute  bottom-0 p-2  md:p-4 ">
            <RatingBox carItem={carItem} />
          </div>
        </div>
        <div className=" lg:w-2/3 flex flex-col flex-wrap lg:px-6">
          <h3 className="w-full py-4 text-black-darkest text-2xl font-bold ">
            Testbericht{"\n"} {carItem.title}
          </h3>
          <p>{carItem?.body}</p>
          <button className="bg-blue-dark h-14 w-48 my-6 flex justify-center items-center text-white print:hidden">
            Testbericht lesen
          </button>
        </div>
      </div> */}
      {/* other articles section */}
      {/* First Article */}
      {/* <div className=" flex lg:flex-row-reverse flex-col w-full lg:p-18 justify-center items-center  p-4 ">
        <div className="w-full p-4 lg:w-1/2 lg:p-12 print:hidden">
          {carItem?.src && (
            <Image
              src={carItem?.src}
              alt={carItem?.title}
              width={195}
              height={140}
              layout="responsive"
              objectFit="cover"
              className="rounded-l-lg"
            />
          )}
        </div>
        <div className="w-full p-2 lg:w-1/2 flex flex-col flex-wrap">
          <h3>Text-Bild-Element mit Text links</h3>
          <p>{carItem?.description}</p>
        </div>
      </div> */}
    </>
  );
};
export default Articles;

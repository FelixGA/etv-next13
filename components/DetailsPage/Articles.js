import Image from "next/image";
const Articles = (props) => {
  return (
    <>
      {/* other articles section */}
      {/* First Article */}
      <div className=" flex lg:flex-row-reverse flex-col w-full lg:p-18 justify-center items-center  p-4 ">
        <div className="w-full p-4 lg:w-1/2 lg:p-12 print:hidden">
          {props.carItem?.src && (
            <Image
              src={props.carItem?.src}
              alt={props.carItem?.title}
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
          <p>{props.carItem?.description}</p>
        </div>
      </div>
      {/* SECOND Article */}
      {/* <div className=" flex lg:flex-row flex-col w-full lg:p-18 justify-center items-center  p-4 ">
        <div className="w-full p-4 lg:w-1/2 lg:p-12 print:hidden">
          <Image
            loader={myLoader}
            src={`http://localhost:1337${props.carItem?.photo?.data[1]?.attributes.url}`}
            alt={props.carItem?.photo.data[0].attributes.alternativeText}
            width={195}
            height={140}
            layout="responsive"
            objectFit="cover"
            className="rounded-l-lg"
            unoptimized={true}
          />
        </div>
        <div className="w-full p-2 lg:w-1/2 flex flex-col flex-wrap">
          <h3>Text-Bild-Element mit Text links</h3>
          <p>{props.carItem?.description}</p>
        </div>
      </div> */}
    </>
  );
};
export default Articles;

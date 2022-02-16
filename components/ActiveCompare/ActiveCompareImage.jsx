import Image from "next/image";

function ActiveCompareImage(props) {
  const myLoader = ({ src }) => {
    return src;

  const carsData2 = props.comparedCars.map((item, index) => (
    <div key={index}>
      <div className="lg:w-64 xl:w-88 2xl:w-[380px] p-4">
        <Image
          className="rounded-md md:rounded-lg brightness-[75%] "
          src={item.src}
          alt="picture"
          objectFit="cover"
          width={100.35}
          height={66.9}
          layout="responsive"
        />
        <div className="relative">
          <p className="absolute bottom-28 2xl:bottom-48 left-4 2xl:left-6 text-lg 2xl:text-xl text-white font-bold">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  ));
  return carsData2;
}

export default ActiveCompareImage;

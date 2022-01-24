import { useRouter } from "next/router";
import CarCardDetailsDesktop from "../../components/ResultList/CarCardDetailsDesktop";
import { useStore } from "../../components/store";
import Image from "next/image";
const Details = () => {
  const router = useRouter();
  const { cartitle } = router.query;
  // const { state, dispatch } = useStore();
  // console.log(state?.detailedCars);
  // const caritem = state?.detailedCars;
  const myLoader = ({ src }) => {
    return src;
  };
  return (
    <div className="w-full">
      I AM {cartitle}
      {/* {caritem?.price} */}
      {/* <div className=" w-1/2 ">
        <Image
          loader={myLoader}
          src={`http://localhost:1337${caritem?.photo.data[0].attributes.url}`}
          alt={caritem?.photo.data[0].attributes.alternativeText}
          width={195}
          height={140}
          layout="responsive"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div> */}
      <div className="w-1/2">
        {/* <CarCardDetailsDesktop caritem={caritem} /> */}
      </div>
    </div>
  );
};

export default Details;

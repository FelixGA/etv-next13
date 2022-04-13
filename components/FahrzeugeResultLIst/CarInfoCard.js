import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
const CarInfoCard = ({ carItem, getCarsReview }) => {
  const router = useRouter();
  return (
    <div>
      {/* TITLE */}
      <div className="">
        <Link href={`/transporter/${carItem.name}`}>
          <a>
            <h3 className="title text-2xl sm:text-3xl font-bold text-black-darkest pt-8 pb-4 flex leading-7 ">
              {carItem.title}
            </h3>
          </a>
        </Link>
      </div>
      {/* IMAGE + TEXT + LINK */}
      <div className="flex flex-col-reverse lg:flex-row-reverse">
        <p className="pl-0 lg:pl-8 pb-4">
          {carItem.description}
          {getCarsReview && (
            <Link
              href={`/magazin/reviews/${
                getCarsReview?.find(
                  (item) =>
                    item.slug == carItem?.relatedReviews ||
                    carItem?.relatedReviews?.includes(item.slug)
                )?.slug
              }`}
            >
              <a className="text-blue-dark pl-2">
                Lesen Sie hier den gesamten Beitrag zum Fahrzeug!
              </a>
            </Link>
          )}
        </p>
        <div className="pb-4 flex justify-center items-center ">
          <Link href={`/transporter/${carItem.name}`} passHref>
            <a className="w-full lg:w-96 relative border rounded-md border-blue-dark">
              {carItem?.src && (
                <Image
                  className={
                    router.pathname == "/fahrzeuge"
                      ? "rounded-md "
                      : "rounded-l-md "
                  }
                  src={carItem.src}
                  alt={carItem.title}
                  width={257}
                  height={170}
                  objectFit="contain"
                  layout="responsive"
                />
              )}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CarInfoCard;

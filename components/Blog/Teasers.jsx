import Image from "next/image";
import Link from "next/link";

export default function Teasers({ teasers }) {

  return (
   
    <div>
      <div className="grid grid-rows-3 gap-5 md:grid-rows-1 md:grid-cols-3 md:gap-2 ">
        {teasers?.map((teaser) => (
          
          <a
            href={`/magazin/${teaser.category}/${teaser.slug}`}
            key={teaser.slug}
          >
            <div className="transition duration-200 border cursor-pointer shadow-dropdown hover:scale-[103%]">
              <a>
                {teaser.title && (
                  <Image
                    src={teaser.src}
                    alt={teaser.title}
                    width={600}
                    height={300}
                    objectFit="cover"
                    layout="responsive"
                  />
                )}
              </a>

              <h3 className="px-2 pb-2 text-base ">{teaser.title}</h3>
            </div>
          </a>
          
        ))}
      </div>
    </div>
  );
}

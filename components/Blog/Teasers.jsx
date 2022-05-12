import Image from "next/image";
import Link from "next/link";

export default function Teasers({ teasers }) {
  //   console.log(teasers);
  return (
    <div>
      <div className="grid grid-rows-3 gap-5 md:grid-rows-1 md:grid-cols-3 md:gap-2">
        {teasers?.map((teaser, index) => (
          <div key={index}>
            <Link href={`/${teaser.category}/${teaser.slug}`}>
              <a>
                {teaser.title && (
                  <Image
                    src={teaser.src}
                    alt={teaser.title}
                    width={600}
                    height={300}
                    objectFit="cover"
                  />
                )}
              </a>
            </Link>
            <p className="font-medium text-white ">{teaser.title}</p>
            <p className="text-red-500">test</p>
          </div>
        ))}
      </div>
    </div>
  );
}

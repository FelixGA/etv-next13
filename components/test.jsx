import Link from "next/link";
import Image from "next/image";
import LinkTile from "./LinkTile";
import placeholder from "/public/images/placeholder.jpg";

const options = { year: "numeric", month: "long", day: "numeric" };

export default function BlogHeader(props) {
  return (
    <>
      {props.posts?.length >= 4 && (
        <div className="hidden w-full grid-cols-4 mx-auto border-b-8 lg:grid max-w-screen-2xl border-b-green-light">
          {props.posts.slice(0, 4).map((post, index) => (
            <Link
              href={`/${props.prefix}/${post.category}/${post.slug}`}
              key={index}
            >
              <a className="relative w-full h-full duration-100 first:row-span-2 first:col-span-2">
                {post.image && (
                  <Image
                    width={400}
                    height={200}
                    src={post.image || placeholder}
                    alt={post.title}
                    objectFit="cover"
                    layout="responsive"
                    priority
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 grid justify-between px-2 font-bold text-white h-18 bg-green-dark bg-opacity-80">
                  <p className="line-clamp-2">{post.title}</p>
                  <p className="text-green-light">
                    {new Date(post.publishedAt).toLocaleDateString(
                      props.page.locale,
                      options
                    )}
                  </p>
                </div>
              </a>
            </Link>
          ))}
          <LinkTile props={props.prefix} />
        </div>
      )}
    </>
  );
}

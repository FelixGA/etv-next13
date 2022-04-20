// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import LinkTile from "./LinkTile";

// const options = { year: "numeric", month: "long", day: "numeric" };

// export default function BlogHeader(props) {
//   const [posts, setPosts] = useState(props.props.posts);
//   const [categories, setCategories] = useState([]);
//   return (
//     <div className="lg:grid grid-cols-4 w-full mx-auto max-w-screen-2xl border-b-green-light border-b-8 hidden">
//       {props.prefix &&
//         posts.slice(0, 4).map((post, index) => (
//           <Link
//             href={`/${props.prefix}/${post.attributes.category}/${post.attributes.slug}`}
//             key={index}
//           >
//             <a className="w-full h-full relative first:row-span-2 first:col-span-2 hover:scale-105 hover:z-10 duration-100">
//               <Image
//                 width={400}
//                 height={400}
//                 src={post.attributes.previewImage.data?.attributes?.url}
//                 alt={
//                   post.attributes.previewImage.data?.attributes?.alternativeText
//                 }
//                 objectFit="cover"
//                 layout="responsive"
//                 priority
//               />
//               <div className="absolute bottom-0 px-2 bg-green-dark bg-opacity-80 w-full  text-white flex xl:min-h-[6em] flex-col justify-between">
//                 {post.attributes.title}
//                 <p className=" text-green-light">
//                   {categories[index]} |{" "}
//                   {new Date(post.attributes.publishedAt).toLocaleDateString(
//                     props.props.page.locale,
//                     options
//                   )}
//                 </p>
//               </div>
//             </a>
//           </Link>
//         ))}
//       <LinkTile props={props.prefix} />
//     </div>
//   );
// }

// import BlogArticles from "../components/BlogArticles";
// import HeroSection from "../components/HeroSection/HeroSection";
// import TopSlider from "../components/Sliders/TopSlider";
// import BottomSlider from "../components/Sliders/BottomSlider";
// import NewsLetter from "../components/NewsLetter";
// import { MDXRemote } from "next-mdx-remote";
// import getContent from "/utils/getContent";
// const components = {
//   img: (image) => <Image src={image.src} alt={image.alt} objectFit="contain" />,
//   a: (link) => (
//     <Link href={link.href}>
//       <a>{link.children}</a>
//     </Link>
//   ),
//   h2: (heading) => <h2 className="mb-8 font-black">{heading.children}</h2>,
// };

// function homepage(props) {
//   console.log(props.vehicles)

//   return (
//     <>
//             <MDXRemote {...props.vehicles.sources.main} components={components} />

//       <HeroSection />
//       {/* <TopSlider getCars={getCars} /> */}
//       <BlogArticles />
//       <BottomSlider />
//       <NewsLetter />
//     </>
//   );
// }

// /* export async function getStaticProps(context) {
//   const path = "/agb";
//   const pageData = await fetch(queries(path).pageQuery);
//   let page = pageData.pages?.length > 0 ? pageData.pages[0] : null;

//   if (!page) {
//     return {
//       notFound: true,
//     };
//   }

//   page = await parseMarkdown(page);

//   return {
//     props: {
//       page,
//     },
//   };
// } */
// export async function getStaticProps(context) {
//   const pages = await getContent("pages", context.locale);
//   const posts = await getContent("posts", context.locale);
//   let vehicles = await getContent("vehicles", context.locale);
// const page = pages.find((page) => page.path === "/");

//   if (!page) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       vehicles,
//       posts,
      
//     },
//   };
// }

// export default homepage;

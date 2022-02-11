import Head from "next/head";
import getContent from "/utils/getContent";
import { MDXRemote } from "next-mdx-remote";
import BlogArticles from "../components/BlogArticles";
import HeroSection from "../components/HeroSection/HeroSection";
import TopSlider from "../components/Sliders/TopSlider";
import BottomSlider from "../components/Sliders/BottomSlider";
import NewsLetter from "../components/NewsLetter";

const components = {
  img: (image) => <Image src={image.src} alt={image.alt} objectFit="contain" />,
  a: (link) => (
    <Link href={link.href}>
      <a>{link.children}</a>
    </Link>
  ),
  h2: (heading) => <h2 className="mb-8 font-black">{heading.children}</h2>,
};

export default function Home(props) {
  console.log(props.page.sources.main)
  return (
    <>
      <Head>
        <title>{props.page.title}</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="manifest" href="./manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <MDXRemote {...props.page.sources.main} components={components} />
       <HeroSection />
      {/* <TopSlider getCars={getCars} /> */}
      <BlogArticles />
      <BottomSlider />
      <NewsLetter />
    </>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  const page = pages.find((page) => page.path === "/");

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      posts,
    },
  };
}

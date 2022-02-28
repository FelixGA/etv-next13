import Head from "next/head";
import getContent from "/utils/getContent";
import { MDXRemote } from "next-mdx-remote";
import BlogArticles from "../components/BlogArticles";
import HeroSection from "../components/HeroSection/HeroSection";
import TopSlider from "../components/Sliders/TopSlider";
import BottomSlider from "../components/Sliders/BottomSlider";
import NewsLetter from "../components/NewsLetter";
import { useState } from "react";

export default function Home(props) {
  const [getCars, SetGetCars] = useState(props.vehicles);
  const [getContent, SetGetContent] = useState(props.page);
  console.log(getContent.content.find((content) => content.name === "header"));
  return (
    <>
      <Head>
        <title>{props.page.title}</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="manifest" href="./manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <MDXRemote
        {...props.page.content.find((content) => content.name === "header")}
      /> */}
      <HeroSection getContent={getContent} />
      <TopSlider getCars={getCars} getContent={getContent} />
      <BlogArticles getContent={getContent} />
      <BottomSlider getContent={getContent} />
      <NewsLetter getContent={getContent} />
    </>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
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
      vehicles,
    },
  };
}

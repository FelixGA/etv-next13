import Head from "next/head";
import getContent from "/utils/getContent";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import BlogArticles from "../components/Homepage/BlogArticles";
import HeroSection from "../components/HeroSection/HeroSection";
import TopSlider from "../components/Sliders/TopSlider";
import Funnel from "../components/Caradvisor/Funnel";
import NewsLetter from "../components/Homepage/NewsLetter";
import { useState } from "react";

export default function Home(props) {
  const [getCars, SetGetCars] = useState(props.vehicles);
  const [getContent, SetGetContent] = useState(props.page);
  const [getMarkdownContext, SetGetMarkdownContext] = useState(props.context);
  console.log(props.blogs.map((blog) => blog));

  return (
    <>
      <Head>
        <title>{props.page.title}</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="manifest" href="./manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection
        getContent={getContent}
        getMarkdownContext={getMarkdownContext}
      />

      <TopSlider getCars={getCars} getContent={getContent} />
      <BlogArticles getMarkdownContext={getMarkdownContext} />

      <Funnel getCars={getCars} getContent={getContent} />
      <NewsLetter getMarkdownContext={getMarkdownContext} />
    </>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  let blogs = await getContent("blogs", context.locale);
  const page = pages.find((page) => page.path === "/");
  const header = await serialize(
    page.content.find((content) => content.name === "header").markdown
  );
  const eAutoAdvisor = await serialize(
    page.content.find((content) => content.name === "eAutoAdvisor").markdown
  );
  const substities = await serialize(
    page.content.find((content) => content.name === "substities").markdown
  );
  const newsletter = await serialize(
    page.content.find((content) => content.name === "newsletter").markdown
  );
  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      context: { header, eAutoAdvisor, substities, newsletter },
      page,
      posts,
      vehicles,
      blogs,
    },
  };
}

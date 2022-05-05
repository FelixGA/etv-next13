import Head from "../components/core/Head";
import getContent from "/utils/getContent";
import { serialize } from "next-mdx-remote/serialize";
import BlogArticles from "../components/Homepage/BlogArticles";
import HeroSection from "../components/HeroSection/HeroSection";
import TopSlider from "../components/Sliders/TopSlider";
import Funnel from "../components/Caradvisor/Funnel";
import NewsLetter from "../components/Homepage/NewsLetter";
import { useState, useEffect } from "react";

export default function Home(props) {
  const [getCars, SetGetCars] = useState(props.vehicles);
  const [getContent, SetGetContent] = useState(props.page);
  const [getMarkdownContext, SetGetMarkdownContext] = useState(props.context);
  const [getBrands, SetGetBrands] = useState(props.brands);
  useEffect(() => {
    SetGetBrands(props.brands);
    SetGetCars(props.vehicles);
    SetGetContent(props.page);
    SetGetMarkdownContext(props.context);
  }, [props]);
  return (
    <>
      <Head page={props.page} />

      {/* state?.mobileNavActives */}
      <HeroSection
        getContent={getContent}
        getMarkdownContext={getMarkdownContext}
        getBrands={getBrands}
      />
      <TopSlider getCars={getCars} getContent={getContent} />
      <BlogArticles getMarkdownContext={getMarkdownContext} />
      <Funnel getCars={getCars} getContent={getContent} getBrands={getBrands} />
      <NewsLetter getMarkdownContext={getMarkdownContext} />
    </>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  let blogs = await getContent("blogs", context.locale);
  let brands = await getContent("brands", context.locale);
  const page = pages.find((page) => page.path === "/");
  /* mdxs for the homepage articles */
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
      vehicles,
      blogs,
      brands,
    },
  };
}

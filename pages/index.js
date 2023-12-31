import Head from "../components/core/Head";
import dynamic from "next/dynamic";
import getContent from "/utils/getContent";
import { serialize } from "next-mdx-remote/serialize";
import BlogArticles from "../components/Homepage/BlogArticles";
import HeroSection from "../components/HeroSection/HeroSection";
import TopSlider from "../components/Sliders/TopSlider";
import Funnel from "../components/Caradvisor/Funnel";
import NewsLetter from "../components/Homepage/NewsLetter";

export default function Home(props) {
  
  return (
    <>
      <Head page={props.page} />

      <HeroSection
        getContent={props.page}
        getMarkdownContext={props.context}
        getBrands={props.brands}
      />
      <TopSlider vehicles={props.vehicles} page={props.page} />
      <BlogArticles getMarkdownContext={props.context} />
      <Funnel
        getCars={props.vehicles}
        getContent={props.page}
        getBrands={props.brands}
      />
      <NewsLetter getMarkdownContext={props.context} />
    </> 
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
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
      brands,
    },
  };
}

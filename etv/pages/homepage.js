import BlogArticles from "../components/BlogArticles";
import HeroSection from "../components/HeroSection/HeroSection";
import TopSlider from "../components/Sliders/TopSlider";
import BottomSlider from "../components/Sliders/BottomSlider";
import NewsLetter from "../components/NewsLetter";

function homepage() {
  /*  const cars = [
    { name: "mdnf,s", img: "ndscnhdskcn" },
    { name: "mdnf,fergffer", img: "111111111" },
    { name: "mdnf,fergffer", img: "111111111" },
    { name: "mdnf,fergffer", img: "111111111" },
    { name: "mdnf,fergffer", img: "111111111" },
  ]; */
  return (
    <>
      <HeroSection />
      <TopSlider /* cars={cars} */ />
      <BlogArticles />
      <BottomSlider />
      <NewsLetter />
    </>
  );
}

/* export async function getStaticProps(context) {
  const path = "/agb";
  const pageData = await fetch(queries(path).pageQuery);
  let page = pageData.pages?.length > 0 ? pageData.pages[0] : null;

  if (!page) {
    return {
      notFound: true,
    };
  }

  page = await parseMarkdown(page);

  return {
    props: {
      page,
    },
  };
} */

export default homepage;

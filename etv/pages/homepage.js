import BlogArticles from "../components/BlogArticles";
import HeroSection from "../components/HeroSection/HeroSection";
import TopSlider from "../components/TopSlider";
import BottomSlider from "../components/BottomSlider";
import NewsLetter from "../components/NewsLetter";

function homepage() {
  return (
    <>
      <HeroSection />
      <TopSlider />
      <BlogArticles />
      <BottomSlider />
      <NewsLetter />
    </>
  );
}

export default homepage;

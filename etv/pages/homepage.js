import BlogArticles from "../components/BlogArticles";
import HeroSection from "../components/HeroSection";
import TopSlider from "../components/TopSlider";
import BottomSlider from "../components/BottomSlider";

function homepage() {
  return (
    <>
      <HeroSection />
      <TopSlider />
      <BlogArticles />
      <BottomSlider />
    </>
  );
}

export default homepage;

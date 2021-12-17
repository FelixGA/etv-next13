import BlogArticles from "../components/BlogArticles";
import HeroSection from "../components/HeroSection";
import TopSlider from "../components/TopSlider";
import BottomSlider from "../components/BottomSlider";

function homepage() {
  return (
    <div>
      <HeroSection />
      <TopSlider />
      <BlogArticles />
      <BottomSlider />
    </div>
  );
}

export default homepage;

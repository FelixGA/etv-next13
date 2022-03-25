import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import { useStore } from "../../elektrotransporter-vergleich/components/store";

export default function Layout(props) {
  const [blogs, setBlogs] = useState(props.blogs);
  const { state, dispatch } = useStore();
  return (
    <div
      className={state?.mobileNavActives ? "overflow-hidden max-h-screen" : ""}
    >
      <Header />
      <main>{props.children}</main>
      <Footer blogs={blogs} />
    </div>
  );
}
export async function getStaticProps(context) {
  let blogs = await getContent("blogs", context.locale);

  return {
    props: {
      blogs,
    },
  };
}

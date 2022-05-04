import Head from "../components/core/Head";
import getContent from "/utils/getContent";
import { useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
export default function dataprotection(props) {
  const [getContent, SetGetContent] = useState(props.context);
  return (
    <div className="flex flex-col flex-wrap justify-between mx-6 py-6 text-center text-sm leading-8 bg-grey-lightest lg:mx-36 lg:pl-16 lg:text-2xl  lg:text-left 2xl:mx-72">
      <Head page={props.page} />
      <MDXRemote {...getContent.datenschutzerklarung} />
      <MDXRemote {...getContent.verantwortlicher} />
      <MDXRemote {...getContent.alles} />
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  let blogs = await getContent("blogs", context.locale);

  const page = pages.find((page) => page.path === "/dataprotection");
  const datenschutzerklarung = await serialize(
    page.content.find((content) => content.name === "Datenschutzerklärung")
      .markdown
  );
  const verantwortlicher = await serialize(
    page.content.find((content) => content.name === "Verantwortlicher").markdown
  );
  const alles = await serialize(
    page.content.find((content) => content.name === "alles").markdown
  );
  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      context: { datenschutzerklarung, verantwortlicher, alles },
      blogs,
    },
  };
}

import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Funnel from "../components/Caradvisor/Funnel";

export default function caradvisor(props) {
  return (
    <div>
      <Funnel />
    </div>
  );
}
export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  const page = pages.find((page) => page.path === "/caradvisor");

  if (!pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicles,
      posts,
      page,
    },
  };
}

import getContent from "/utils/getContent";

export default function skata() {
  return <>hii</>;
}

export async function getStaticProps(context) {
  let blogs = await getContent("blogs", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  // console.log(vehicles);
  return {
    props: {
      vehicles,
      blogs,
    },
  };
}

export const cars = [1, 2, 3];

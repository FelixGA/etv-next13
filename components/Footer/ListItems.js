import Link from "next/link";

const ListItems = (props) => {
  props.itemsList;
  return (
    <ul className="flex flex-col justify-between items-center pt-2 text-black px-8 pb-4">
      {props.itemsList
        ?.map((blog, index) => (
          <li
            className="my-2 flex justify-between flex-wrap items-center"
            key={index}
          >
            <Link
              href={
                blog.category === "rechtlichesundkontakt"
                  ? `/${blog.slug}`
                  : blog.category === "referenzen"
                  ? `/magazin/${blog.slug}`
                  : `/magazin/reviews/${blog.slug}`
              }
            >
              <a className="text-center flex-wrap text-sm sm:text-lg">
                {blog.title}
              </a>
            </Link>
          </li>
        ))
        .splice(0, 5)}
    </ul>
  );
};
export default ListItems;

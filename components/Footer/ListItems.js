import Link from "next/link";

const ListItems = (props) => {
  props.itemsList;
  return (
    <ul className="flex flex-col items-center justify-between px-8 pb-4 text-[#b1a7a7]">
      {props.itemsList
        ?.map((blog, index) => (
          <li
            className="flex flex-wrap items-center justify-between my-2"
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
              <a className="flex-wrap text-sm text-center sm:text-lg">
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

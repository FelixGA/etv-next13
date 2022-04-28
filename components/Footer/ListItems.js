import Link from "next/link";

const ListItems = (props) => {
  props.itemsList;
  return (
    <ul className="flex flex-col sm:pb-4 text-[#b1a7a7] items-center md:items-start  w-48 ">
      {props.itemsList
        ?.map((blog, index) => (
          <li className="flex items-center justify-between my-2 " key={index}>
            <Link
              href={
                blog.category === "rechtlichesundkontakt"
                  ? `/${blog.slug}`
                  : blog.category === "referenzen"
                  ? `/magazin/${blog.slug}`
                  : `/magazin/reviews/${blog.slug}`
              }
            >
              <a className="text-sm text-center md:text-left sm:text-lg">
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

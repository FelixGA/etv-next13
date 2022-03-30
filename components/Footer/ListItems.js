import Image from "next/image";

import Link from "next/link";

const ListItems = (props) => {
  props.itemsList;
  return (
    <ul className=" flex flex-col justify-between items-center my-6 text-black">
      {props.itemsList?.map((blog) => (
        <li className="my-1 flex justify-between items-center">
          <Link
            href={
              blog.category === "rechtlichesundkontakt"
                ? `/${blog.slug}`
                : blog.category === "referenzen"
                ? `/magazin/${blog.slug}`
                : `/magazin/reviews/${blog.slug}`
            }
          >
            <a className="text-center">{blog.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ListItems;

import Image from "next/image";

import Link from "next/link";

const ListItems = (props) => {
  /*  select blogs upon category */

  return (
    <ul className=" flex flex-col justify-between items-center my-6 text-black">
      {props.itemsList?.map((blog) => (
        <li className="my-1 flex justify-between items-center">
          <Link href={`/magazin/${blog.slug}`}>
            <a className="text-center">{blog.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ListItems;

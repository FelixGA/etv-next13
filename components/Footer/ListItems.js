import Link from "next/link";

const ListItems = (props) => {
  props.itemsList;
  return (
    <ul className=" flex flex-col justify-between items-center pb-6 pt-2 sm:my-6 text-black">
      {props.itemsList?.map((blog, index) => (
        <li className="my-1 flex justify-between items-center" key={index}>
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

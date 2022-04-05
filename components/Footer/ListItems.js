import Link from "next/link";

const ListItems = (props) => {
  props.itemsList;
  return (
    <ul className="flex flex-col justify-between items-center pt-2 text-black px-2">
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
            <a className="text-center text-sm xs:text-lg">{blog.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ListItems;

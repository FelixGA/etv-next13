import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/eTv">
            <a>etv</a>
          </Link>
        </li>
        <li>
          <Link href="/something">
            <a> something</a>
          </Link>
        </li>
        <li>
          <Link href="/somethingelse">
            <a>somethingelse</a>
          </Link>
        </li>
        {/* 
        <li className={navStyles.navItem}>
          <select className="border py-2 px-3 text-black ">
            <option value="option1" selected>
              option1
            </option>
            <option value="option2" selected>
              option2
            </option>
            <option value="option3" selected>
              option3
            </option>
          </select>
        </li> */}
      </ul>
    </>
  );
};
export default Nav;

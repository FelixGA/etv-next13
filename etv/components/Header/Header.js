import Nav from "../Header/Nav";
import Image from "next/image";
const Header = () => {
  return (
    <div className="w-full lg:sticky lg:top-0 lg:z-10">
      <Nav></Nav>
      {/* later */}
    </div>
  );
};
export default Header;

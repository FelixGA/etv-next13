import Nav from "../Header/Nav";
import Image from "next/image";
const Header = () => {
  return (
    <div className="relative">
      <Nav />
      {/* later */}
      <div className="hidden  w-full h-96 bg-red-400 absolute justify-end forz">
        <div className="w-auto h-96">
          <Image
            src="/images/kleintransporter-hintergrund1.jpeg"
            width={600}
            height={300}
            alt="Kleintransporter"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;

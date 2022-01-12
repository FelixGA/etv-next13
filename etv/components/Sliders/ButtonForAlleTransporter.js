import Link from "next/link";
import { useStore } from "../../components/store";
/* import image from "../public/images/VW-e-Crafter-Front-300x225.jpg"; */

const ButtonForAlleTransporter = () => {
  const { state, dispatch } = useStore();
  return (
    <div className="w-full my-8 flex justify-center">
      <button className="h-12 w-80 border rounded-md border-blue-darker text-blue-darker font-bold">
        <Link href="/comparePage">
          <a
            onClick={() => {
              dispatch({
                type: "range",
                data: [],
              });
              dispatch({
                type: "weight",
                data: [],
              });
              dispatch({
                type: "price",
                data: [],
              });
            }}
            className="visited:text-blue-darker"
          >
            Alle Transporter anzeigen
          </a>
        </Link>
      </button>
    </div>
  );
};
export default ButtonForAlleTransporter;

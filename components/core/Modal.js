import { AiOutlineClose } from "react-icons/ai";

export default function Modal(props) {
  return (
    <>
      {props.open && (
        <>
          <div
            className="fixed inset-0 z-40 backdrop-blur-sm bg-grey-darkest bg-opacity-30 "
            onClick={() => props.setOpen(false)}
          />
          <div className="fixed z-50 flex flex-col overflow-y-hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl ">
            <div className="flex items-center px-2 text-center">
              {/*   <p className="flex items-center justify-center flex-1 h-10 text-lg font-bold">
                {props.name} Jetzt anfragen
              </p> */}
              <div
                onClick={() => props.setOpen(false)}
                className="absolute right-2 sm:right-5 top-6"
              >
                <AiOutlineClose size={30} />
              </div>
            </div>
            {props.children}
          </div>
        </>
      )}
    </>
  );
}

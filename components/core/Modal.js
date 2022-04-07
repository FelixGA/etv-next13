import { AiOutlineClose } from "react-icons/ai";

export default function Modal(props) {
  return (
    <>
      {props.open && (
        <>
          <div
            className="fixed inset-0 z-40 backdrop-blur-sm bg-grey-darkest bg-opacity-30"
            onClick={() => props.setOpen(false)}
          />
          <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-grey-lighter rounded-xl md:pb-8 max-w-screen max-h-fit overflow-y-hidden">
            <div className="flex items-center px-2 text-center">
              {/*   <p className="flex flex-1 h-10 items-center justify-center font-bold text-lg">
                {props.name} Jetzt anfragen
              </p> */}
              <div
                onClick={() => props.setOpen(false)}
                className="absolute right-5 top-2"
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

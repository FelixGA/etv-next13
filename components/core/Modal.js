import { AiOutlineClose } from "react-icons/ai";

// Design des Formular-Window
export default function Modal(props) {
  return (
    <>
      {props.open && (
        <>
          <div
            className="fixed inset-0 z-40 backdrop-blur-sm bg-grey-darkest bg-opacity-30"  
          // onClick={() => props.setOpen(false)}
          />
          {/* <div className="w-full z-50"> */}
          <div className="fixed z-50 flex flex-col overflow-y-hidden transform -translate-x-1/2 -translate-y-1/2 rounded-sm top-1/2 left-1/2">
            <div className="flex items-center px-2 text-center">
              {/*   <p className="flex items-center justify-center flex-1 h-10 text-lg font-bold">
                {props.name} Jetzt anfragen
              </p> */}
              <div
                // bei click: schließe Formular-Fenster
                onClick={() => props.setOpen(false)}
                className="absolute right-5 top-4 hover:cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            {props.children}
          </div>
        </>
      )}
    </>
  );
}

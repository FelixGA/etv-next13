export default function Button1(props) {
  return (
    <button
      id={props.id}
      className={`px-4 py-2 text-white font-bold shadow-md transition-all bg-yellow hover:bg-yellow-dark active:bg-grey-light focus:outline-none ${props.className}`}
      name={props.name}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

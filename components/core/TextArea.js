import { useRouter } from "next/router";

export default function TextArea({
  register,
  label,
  id,
  type,
  placeholder,
  style,
  pattern,
  registerData,
  width,
  required,
  carItem,
}) {
  const router = useRouter();
  router.pathname == "/kontakt" ? (required = true) : (required = false);
  return (
    <div
      className={router.pathname == "/kontakt" ? "text-left mb-4" : "hidden"}
    >
      <label htmlFor={id} className="text-blue-lighter font-bold py-2">
        {label}
      </label>
      <textarea
        className={`${style} bg-grey-lighter focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block ${
          width ? `${width}` : "w-64 xs:w-96"
        }`}
        htmlFor={id}
        rows={4}
        {...register(registerData, {
          required: required,
        })}
        defaultValue={carItem ? carItem : null}
        type={type}
        id={id}
      ></textarea>
    </div>
  );
}

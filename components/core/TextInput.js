export default function TextInput({
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
}) {
  const fullNameRegex = RegExp(/^[a-zA-Z ]{2,30}$/);

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="font-bold sm:py-2 text-blue-lighter">
        {label}
      </label>
      <input
        className={`${style} bg-grey-lighter focus:outline-none focus:ring focus:border-blue-darker focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block flex-grow"
        }`}
        content-type={type}
        // required

        placeholder={placeholder}
        // autoComplete={props.autoComplete}
        // value={props.value || ""}
        // onChange={props.onChange}
        {...register(registerData, {
          required: required,
          pattern: pattern,
        })}
      />
    </div>
  );
}

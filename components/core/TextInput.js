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
    <div className="mb-4 ">
      <label htmlFor={id} className="text-blue-lighter font-bold py-2">
        {label}
      </label>
      <input
        className={`${style} bg-grey-lighter focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block ${
          width ? `${width}` : "w-64 xs:w-96"
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

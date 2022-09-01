import { useRouter } from "next/router";
import { useStore } from "../store";

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
  const { state, dispatch } = useStore();

  router.pathname == "/kontakt" ? (required = true) : (required = false);
  return (
    <div
      className={
        router.pathname == "/kontakt"
          ? "text-left mb-4 flex flex-col flex-grow"
          : "hidden"
      }
    >
      <label htmlFor={id} className="py-2 font-bold text-blue-lighter">
        {label}
      </label>
      <textarea
        className={`${style} bg-grey-lighter focus:outline-none focus:ring focus:border-blue-darker focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block ${
          width ? `${width}` : "flex-grow"
        }`}
        htmlFor={id}
        rows={4}
        {...register(registerData, {
          required: required,
        })}
        defaultValue={
          carItem
            ? `${carItem.split(" ").join("_")}_Request_stageId238`
            : state?.prices &&
              state?.rangeLithiums &&
              state?.categorys &&
              state?.loadingWeights
            ? `Transporter Anfrage mit: price: ${state?.prices[0].min}-${state?.prices[0].max},
                Aufbautyp: ${state?.categorys[0].min},
                Reichweite: ab ${state?.rangeLithiums[0].min} klm,
                Zuladung:ab ${state?.loadingWeights[0].min} kg,
                stageId834`
            : null
        }
        type={type}
        id={id}
      ></textarea>
    </div>
  );
}

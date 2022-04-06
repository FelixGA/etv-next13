import TextArea from "../core/TextArea";
import TextInput from "../core/TextInput";
import { useForm } from "react-hook-form";

import axios from "axios";
import { useRouter } from "next/router";

export default function Form(props) {
  const router = useRouter();
  const emailRegex = RegExp(
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );

  const fullNameRegex = RegExp(/^[a-zA-Z ]{2,30}$/);
  const phoneNumberRegex = RegExp(/^[0-9]{9,15}$/);
  const countryRegex = RegExp(/^[a-zA-Z ]{2,30}$/);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    "data", data;
    console.log(data);

    try {
      const result = await axios.post(`/api/handleForm`, data);
      console.log(result);
    } catch (err) {
      console.log("error", err.response.data.message);
    }
  };

  const onError = (errors, e) => console.log("errors", errors, e);

  return (
    <form
      /* action="/action_page.php" */
      // action="https://api.vercel.com/v6/deployments"
      method="POST"
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col items-center justify-center w-fit bg-white rounded-md p-8 sm:p-0"
    >
      <TextInput
        placeholder={"z.B. Max Muster"}
        register={register}
        label={"Name:"}
        id={"name"}
        type={"string"}
        pattern={fullNameRegex}
        registerData={"firstName"}
        required={true}
      />
      <TextInput
        placeholder={"ihr Firmenname"}
        register={register}
        label={"Firma:"}
        id={"firma"}
        type={"string"}
        registerData={"firma"}
      />
      <div className="flex justify-between w-64 xs:w-96">
        <TextInput
          width={"w-28 xs:w-44"}
          placeholder={"z.B. 10115"}
          register={register}
          label={"Postleitzahl:"}
          id={"zipcode"}
          type={"string"}
          registerData={"zipcode"}
        />
        <TextInput
          width={"w-28 xs:w-44"}
          placeholder={"z.B. Berlin"}
          register={register}
          label={"Ort:"}
          id={"city"}
          type={"string"}
          registerData={"city"}
        />
      </div>
      <TextInput
        placeholder={"z.B. max@muster.com"}
        register={register}
        label={"Email:"}
        id={"emailInput"}
        type={"string"}
        registerData={"emailInput"}
        required={true}
      />
      <TextInput
        placeholder={"z.B. 030 - 123 45 67"}
        register={register}
        label={"Telefon:"}
        id={"phone"}
        type={"number"}
        registerData={"phone"}
      />

      <TextArea
        placeholder={"z.B. 030 - 123 45 67"}
        register={register}
        label={"Nachricht:"}
        id={"message"}
        type={"textarea"}
        registerData={"message"}
      />

      <div className="text-black">
        <p>{errors.firstName && "Name is required"}</p>
        <p> {errors.firma && "Firma is required"}</p>
        <p> {errors.zipcode && "Postleitzahl is required"}</p>
        <p> {errors.location && "Ort is required"}</p>
        <p> {errors.emailInput && "Email is required"}</p>
        <p> {errors.phone && "Phone is required"}</p>
        <p> {errors.message && "Message is required"}</p>
      </div>
      <button
        /*  onClick={() => props.setOpen(false)} */
        type="submit"
        className="bg-blue-darker text-white h-auto w-64 xs:w-96 rounded-lg py-2 mb-0 sm:mb-8"
      >
        Unverbindlich und kostenlos anfragen
      </button>
    </form>
  );
}

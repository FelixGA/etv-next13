import TextArea from "../core/TextArea";
import TextInput from "../core/TextInput";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

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
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });
  const onSubmit = async (data, e) => {
    e.preventDefault();
    "data", data;
    // console.log(data);

    try {
      const result = await axios.post(`/api/handleForm`, data);
    } catch (err) {
      console.log("error", err.response.data.message);
    }
  };
  const [send, setSend] = useState("");
  const onError = (errors, e) => console.log("errors", errors, e);

  return (
    <>
      <div
        className={
          !send
            ? "flex justify-center flex-col lg:flex-row items-center "
            : "hidden"
        }
      >
        <p
          className={
            router.pathname !== "/kontakt"
              ? "hidden"
              : "text-md font-bold w-[80%] text-left lg:hidden p-4"
          }
        >
          Haben Sie Fragen oder Anregungen zu unserer Webseite oder möchten uns
          etwas mitteilen? Dann nutzen Sie unser Kontaktformular für Ihr
          Anliegen!
        </p>
        <div className="flex items-center justify-center">
          <form
            /* action="/action_page.php" */
            // action="https://api.vercel.com/v6/deployments"
            method="POST"
            onSubmit={handleSubmit(onSubmit, onError)}
            className="flex flex-col pt-0 pb-4 pl-4 pr-4 bg-white rounded-md shadow-lg sm:p-8"
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
              pattern={emailRegex}
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
              carItem={props.carItem}
              required={true}
            />

            <div className="w-64 text-black lg:w-full">
              <p className="text-red-500">
                {errors.firstName && "Name ist erforderlich"}
              </p>
              <p className="text-red-500">
                {errors.firma && "Firma ist erforderlich"}
              </p>
              <p className="text-red-500">
                {errors.zipcode && "Postleitzahl ist erforderlich"}
              </p>
              <p className="text-red-500">
                {errors.location && "Ort ist erforderlich"}
              </p>
              <p className="text-red-500">
                {errors.emailInput && "Email ist erforderlich"}
              </p>
              <p> {errors.phone && "Phone ist erforderlich"}</p>
              <p className="text-red-500">
                {errors.message && "Message ist erforderlich"}
              </p>
              <p className="text-red-500">
                {errors.checkbox &&
                  "Bitte stimmen Sie den Nutzungsbedingungen zu."}
              </p>
            </div>
            <div className="w-64 pb-4 xs:w-96">
              <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    id="confirm"
                    type="checkbox"
                    className="w-3 h-3 mr-1"
                    /* onClick={() => setCheckedStatus(true)}
              checked={checkedStatus} */
                    {...field}
                  />
                )}
              />{" "}
              <label htmlFor="confirm" className="text-sm">
                Ja, ich stimme der{" "}
                <span className="font-bold text-blue-dark">
                  <Link href={"/impressum"}>
                    <a>Datenschutzerklärung</a>
                  </Link>
                </span>{" "}
                und den{" "}
                <span className="font-bold text-blue-dark">
                  <Link href={"/allgemeineGeschaeftsbedingungen"}>
                    <a>AGBs</a>
                  </Link>
                </span>{" "}
                zu (Widerruf jederzeit möglich).
              </label>{" "}
            </div>

            <button
              onClick={() => {
                !errors.emailInput &&
                !errors.firstName &&
                watch().firstName.length > 0 &&
                watch().emailInput.length > 0 &&
                watch().message &&
                watch().checkbox
                  ? setSend(true)
                  : setSend(false);
              }}
              type="submit"
              className="w-64 h-auto py-2 mb-0 text-white rounded-lg bg-blue-darker hover:bg-blue-light xs:w-96 sm:mb-8"
            >
              Unverbindlich und kostenlos anfragen
            </button>
            {/* IMAGES */}

            <div
              className={
                router.pathname == "/kontakt"
                  ? "justify-center items-center relative left-6 flex"
                  : "hidden"
              }
            >
              {/* medal siegel image */}
              <div className="w-14">
                <Image
                  src="/images/siegel2.png"
                  width={166}
                  height={166}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              {/* medal dsvgo image */}
              <div className="relative w-28 ">
                <Image
                  src="/images/siegel.png"
                  width={166}
                  height={166}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className={
          send ? "flex h-fit justify-center items-center w-full " : "hidden"
        }
      >
        <p className="w-full px-8 mt-4 sm:p-8 sm:w-2/3 sm:text-lg">
          Vielen Dank für Ihre Nachricht. Wir melden uns umgehend bei Ihnen.{" "}
          <br />
          Hier können Sie gleich alle
          <Link href={"/comparePage"}>
            <a className="pt-4 pb-4 text-blue-500">
              Elektrotransporter sofort vergleichen.
            </a>
          </Link>
        </p>
      </div>
    </>
  );
}

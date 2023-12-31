import TextArea from "../core/TextArea";
import TextAreaContact from "../core/TextAreaContact";
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

    try {
      const result = await axios.post(
        `/api/contact`,
        data.firma.length > 0 ? data : { ...data, firma: "Privat" }
      );
      // const result = await axios.post(`/api/handleForm`, data);
      if (send && router.pathname == "/kontakt") {
        router.push("/thank-you-kontakt");
      } else if (
        (send && router.pathname == "/comparePage") ||
        (send && router.pathname.includes("/transporter"))
      ) {
        router.push("/thank-you-offer");
      } else if (router.pathname == "/caradvisorFunnel") {
        router.push("/thank-you-funnel");
      }
    } catch (err) {
      console.log("error", err.response.data.message);
    }
  };
  const [send, setSend] = useState(false);
  const onError = (errors, e) => console.log("errors", errors, e);

  return (
    <div
      className={
        !router.pathname == "/caradvisorFunnel" ? "px-4 mt-3" : "border mt-3"
      }
    >
      <div className={send ? "hidden" : ""}>
        {/* FORM */}
        <form
          /* action="/action_page.php" */
          // action="https://api.vercel.com/v6/deployments"
          method="POST"
          onSubmit={handleSubmit(onSubmit, onError)}
          className={
            router.pathname !== "/kontakt"
              ? "flex flex-col bg-white px-4 rounded-sm w-screen md:w-full md:mx-auto"
              : "flex flex-col px-4 bg-white shadow-dropdown rounded-md mb-20"
          }
        >
          {router.pathname !== "/kontakt" ? (
            <div className="flex justify-center pt-6 ">
              <p className="font-bold text-center sm:text-xl text-blue-lighter">
                Jetzt kostenfreies Angebot erhalten!
              </p>
            </div>
          ) : (
            ""
          )}

        <div className="flex flex-col justify-between w-full  text-sm md:text-base md:flex-row">
          <div className="md:w-2/5">
            <TextInput
              style={`${errors.firstName ? " focus:border-red-500" : ""}`}
              placeholder={"z.B. Max Muster"}
              register={register}
              label={"Vor- und Zuname:"}
              id={"name"}
              type={"string"}
              pattern={fullNameRegex}
              registerData={"firstName"}
              required={true}
            />
          </div>
          <div className="md:w-2/5">
            <TextInput
              placeholder={"ihr Firmenname"}
              register={register}
              label={"Firma:"}
              id={"firma"}
              type={"string"}
              registerData={"firma"}
            />
          </div>
        </div>
          <div className="flex flex-col justify-between w-full text-sm md:text-base md:flex-row">
          <div className="md:w-2/5">
            <TextInput
              style={`${errors.emailInput ? " focus:border-red-500 " : ""}`}
              placeholder={"z.B. max@muster.com"}
              register={register}
              label={"Email:"}
              id={"emailInput"}
              type={"string"}
              registerData={"emailInput"}
              required={true}
              pattern={emailRegex}
            />
          </div>
          <div className="md:w-2/5">
            <TextInput
              placeholder={"z.B. 030 - 123 45 67"}
              register={register}
              label={"Telefon:"}
              id={"phone"}
              type={"number"}
              registerData={"phone"}
            />
          </div>
        </div>
        <div className="md:w-2/5 text-sm md:text-base">
              <TextInput
                style={"sm:mr-2"}
                placeholder={"z.B. 10115"}
                register={register}
                label={"Postleitzahl:"}
                id={"zipcode"}
                type={"string"}
                registerData={"zipcode"}
              />
          </div>
          <div className="w-full">
            {router.pathname == "/kontakt" ? (
              <TextAreaContact
                style={`${errors.message ? " focus:border-red-500" : ""}`}
                placeholder={"z.B. 030 - 123 45 67"}
                register={register}
                label={"Nachricht:"}
                id={"message"}
                type={"textarea"}
                registerData={"message"}
                carItem={props.carItem}
                required={true}
              />
            ) : (
              <TextArea
                style={`${errors.message ? " focus:border-red-500" : ""}`}
                placeholder={"z.B. 030 - 123 45 67"}
                register={register}
                label={"Nachricht:"}
                id={"message"}
                type={"textarea"}
                registerData={"message"}
                carItem={props.carItem}
                required={true}
              />
            )}
          </div>
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
              {errors.message && "Nachricht ist erforderlich"}
            </p>
            <p className="text-red-500">
              {errors.checkbox &&
                "Bitte stimmen Sie den Nutzungsbedingungen zu."}
            </p>
          </div>
          <div className="flex-grow px-1 pb-3 pt-3">
            <Controller
              name="checkbox"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  id="confirm"
                  type="checkbox"
                  className="w-3 h-3 mr-1 sm:w-4 sm:h-4"
                  {...field}
                />
              )}
            />{" "}
            <label htmlFor="confirm" className="text-sm">
              Ja, ich stimme der{" "}
              <span className="font-bold text-blue-dark">
                <Link href={"/dataprotection"}>
                  <a target="blank">Datenschutzerklärung</a>
                </Link>
              </span>{" "}
              und den{" "}
              <span className="font-bold text-blue-dark">
                <Link href={"/termsofservice"}>
                  <a target="blank">AGBs</a>
                </Link>
              </span>{" "}
              zu (Widerruf jederzeit möglich).
            </label>{" "}
          </div>
          <div className="flex w-full px-1 pb-4">
            {router.pathname !== "/kontakt" ? (
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
                className="flex-grow px-2 py-2 text-white transition rounded-lg bg-blue-darker hover:bg-blue-light"
              >
                Unverbindlich und kostenlos anfragen
              </button>
            ) : (
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
                className="flex-grow px-2 py-2 text-white transition rounded-lg bg-blue-darker hover:bg-blue-light"
              >
                Nachricht senden
              </button>
            )}
          </div>
          {/* IMAGES */}

          <div
            className={
              router.pathname == "/kontakt"
                ? "justify-center items-center relative flex"
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
            <div className="relative w-28 left-6">
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
  );
}

import TextArea from "../core/TextArea";
import TextInput from "../core/TextInput";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
            ? "flex justify-center items-center flex-col w-72 xs:w-fit"
            : "hidden"
        }
      >
        <div className=" sm:pt-8 flex justify-center items-center">
          <p
            className={
              router.pathname !== "/kontakt"
                ? "text-md sm:text-xl md:text-2xl lg:text-3xl font-bold w-full text-center pt-8 pl-4 pr-4 pb-4 sm:w-3/4"
                : "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold w-full text-center pt-4 pl-4 pr-4 sm:w-3/4"
            }
          >
            Erhalten Sie jetzt Ihr Angebot
            <span className="font-thin"> kostenlos und unverbindlich</span>
          </p>
        </div>
        {/* IMAGES */}

        <div
          className={
            router.pathname == "/kontakt" || "comparePage"
              ? "justify-center items-center relative left-6 flex"
              : "hidden"
          }
        >
          {/* medal siegel image */}
          <div className="w-10 sm:w-24">
            <Image
              src="/images/siegel2.png"
              width={166}
              height={166}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          {/* medal dsvgo image */}
          <div className="w-24 sm:w-44 relative sm:left-4">
            <Image
              src="/images/siegel.png"
              width={166}
              height={166}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        <form
          /* action="/action_page.php" */
          // action="https://api.vercel.com/v6/deployments"
          method="POST"
          onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col w-fit bg-white rounded-md pl-4 pr-4 pt-0 pb-4 sm:p-8 shadow-lg"
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

          <div className="text-black">
            <p>{errors.firstName && "Name is required"}</p>
            <p> {errors.firma && "Firma is required"}</p>
            <p> {errors.zipcode && "Postleitzahl is required"}</p>
            <p> {errors.location && "Ort is required"}</p>
            <p> {errors.emailInput && "Email is required"}</p>
            <p> {errors.phone && "Phone is required"}</p>
            <p> {errors.message && "Message is required"}</p>
            <p> {errors.checkbox && "accept the terms first"}</p>
          </div>
          <div className="w-64 xs:w-96 pb-4">
            {/*  <input
              id="confirm"
              type="checkbox"
              className="mr-2 h-4 w-4"
              onClick={() => setCheckedStatus(true)}
              checked={checkedStatus}
            />
            <label for="confirm" className="text-md">
              Ja, ich stimme der{" "}
              <span className="font-bold">Datenschutzerklärung</span> und den{" "}
              <span className="font-bold">AGBs</span> zu (Widerruf jederzeit
              möglich).
            </label> */}
            <Controller
              name="checkbox"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  id="confirm"
                  type="checkbox"
                  className="mr-2 h-4 w-4"
                  /* onClick={() => setCheckedStatus(true)}
              checked={checkedStatus} */
                  {...field}
                />
              )}
            />{" "}
            <label for="confirm" className="text-md">
              Ja, ich stimme der{" "}
              <span className="font-bold">Datenschutzerklärung</span> und den{" "}
              <span className="font-bold">AGBs</span> zu (Widerruf jederzeit
              möglich).
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
            className="bg-blue-darker hover:bg-blue-light text-white h-auto w-64 xs:w-96 rounded-lg py-2 mb-0 sm:mb-8"
          >
            Unverbindlich und kostenlos anfragen
          </button>
        </form>
      </div>
      <div
        className={
          send
            ? "flex h-fit justify-center items-center w-64 xs:w-80 sm:w-96 "
            : "hidden"
        }
      >
        <p className="px-8 sm:p-8 mt-4 w-full sm:w-2/3 sm:text-lg">
          Vielen Dank für Ihre Fahrzeug-Konfiguration! Wir senden Ihnen jetzt
          eine E-Mail. Bitte prüfen Sie Ihren Posteingang! <br />{" "}
          <p className="pt-4 pb-4">
            Fragen zu Ihrem Fahrzeug-Angebot könne Sie uns jederzeit kostenlos
            anrufen: 0341 978 56 933
          </p>
        </p>
      </div>
    </>
  );
}

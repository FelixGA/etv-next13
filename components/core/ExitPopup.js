import { useState } from "react";
import Image from "next/image";
import BrochureImage from "/public/images/brochure.png";
import Button from "/components/core/Button";
import TextInput from "/components/core/TextInput";
import Checkbox from "/components/core/Checkbox";
import CloseIcon from "/icons/CloseIcon";
import useIdb from "/hooks/useIdb";
import fetch from "/utils/fetchRest";
import useTranslation from "/hooks/useTranslation";
import { useForm } from "react-hook-form";

export default function ExitPopup(props) {
  const request = useTranslation("Broschüre anfordern");
  const heading = useTranslation(
    "Fordern Sie jetzt die aktuelle Broschüre inkl. aller Preise an"
  );
  const formSubmitted = useTranslation(
    "Vielen Dank! Das Formular wurde erfolgreich übermittelt."
  );
  const getBrochure = useTranslation(
    "Sie erhalten umgehend eine Email mit dem Downloadlink zu Ihrer Broschüre."
  );
  const [checked, setChecked] = useState(false);
  const [checkedError, setCheckedError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [exitPopupSeen, setExitPopupSeen] = useIdb("exitPopupSeen");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    if (!checked) {
      setCheckedError(true);
      return;
    }
    try {
      let response = await fetch("/api/forms/exit-popup/create", {
        title: props.page?.title,
        name: data.name,
        email: data.email,
        path: props.page?.path,
        locale: props.page?.locale,
      });
    } catch (err) {
      console.log(err);
    }
    setShowSuccess(true);
  }

  return (
    <>
      {exitPopupSeen === false && (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-40">
          <div className="flex flex-col max-w-screen-sm bg-horizontal-green">
            <div className="flex items-center p-4 text-xl font-bold text-white bg-grey-darkest text-center">
              <p className="flex-1">{heading}</p>
              <div onClick={() => setExitPopupSeen(true)}>
                <CloseIcon className="ml-4 w-8 h-8 cursor-pointer" />
              </div>
            </div>
            {!showSuccess && (
              <>
                <form
                  id="exit-popup"
                  className="p-4 md:px-12 md:py-8"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="grid md:grid-cols-2 items-center">
                    <div className="flex justify-center md:ml-4 md:order-2">
                      <Image
                        src={BrochureImage}
                        width={272}
                        height={185}
                        alt="Brochure"
                        priority
                      />
                    </div>
                    <div className="grid md:order-1 text-white">
                      <TextInput
                        label="Vor- und Zuname"
                        register={register("name", {
                          required: true,
                          pattern:
                            /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+\s[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+/gm,
                        })}
                        errors={errors}
                      />
                      <TextInput
                        label="Email"
                        register={register("email", {
                          required: true,
                          pattern:
                            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm,
                        })}
                        errors={errors}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Checkbox
                      label={
                        props.page?.sharedContent?.find(
                          (content) => content.name === "Privacy"
                        )?.markdown
                      }
                      checked={checked}
                      checkedError={checkedError}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                    <Button type="submit" className="w-full md:w-52 mt-4">
                      <p>{request}</p>
                    </Button>
                  </div>
                </form>
              </>
            )}
            {showSuccess && (
              <div
                id="exit-popup-success"
                className="flex flex-col items-center justify-center h-60 p-4"
              >
                <p className="text-lg text-white text-center">
                  {formSubmitted}
                </p>
                <p className="text-lg text-white text-center">{getBrochure}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

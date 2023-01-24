<form
method="POST"
onSubmit={handleSubmit(onSubmit, onError)}
className={
  send && !errors.emailInput
    ? "hidden"
    : "flex flex-col xs:flex-row mt-4 relative"
}
>
<TextInputNewsletter
  style={`${errors.emailInput && " focus:border-red-500 "}`}
  placeholder={"z.B. max@muster.com"}
  register={register}
  label={"Email:"}
  id={"emailInput"}
  type={"string"}
  registerData={"emailInput"}
  required={true}
  pattern={emailRegex}
/>

<button
  type="submit"
  className="relative px-6 text-base font-bold text-white transition rounded-md bottom-3 xs:bottom-0 lg:top-3 xs:mt-4 bg-blue-dark lg:mt-6 hover:bg-blue-light sm:rounded-r-lg xs:rounded-l-none h-14"
>
  Anmelden
</button>
</form>
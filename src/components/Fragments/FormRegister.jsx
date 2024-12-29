import InputForm from "../Elements/Input";

const FormRegister = (props) => {
  return (
    <form className="max-w-sm mx-auto">
      <InputForm
        label="Name"
        type="text"
        placeholder="insert your name here.."
        name="name"
      />

      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm label="Password" type="password" name="password" />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
      />

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register
      </button>
    </form>
  );
};
export default FormRegister;

import { Button } from "flowbite-react";
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

      <Button className=" bg-blue-600 w-full">Register</Button>
    </form>
  );
};
export default FormRegister;

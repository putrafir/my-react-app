import { useRef } from "react";
import MyButton from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useEffect } from "react";
import { login } from "../../services/auth.service";
import { useState } from "react";

const FormLogin = (props) => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="Bojog"
        name="username"
        ref={usernameRef}
      />
      <InputForm label="Password" type="password" name="password" />

      <MyButton variant="bg-blue-600" type="submit">
        Login
      </MyButton>
      {loginFailed && (
        <p className=" text-red-500 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
};
export default FormLogin;

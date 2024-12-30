import MyButton from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = (props) => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form className="max-w-sm mx-auto" onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm label="Password" type="password" name="password" />

      <MyButton variant="bg-blue-600" type="submit">
        Login
      </MyButton> 
    </form>
  );
};
export default FormLogin;

import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import MyButton from "../Elements/Button";
import { useEffect } from "react";
import { useState } from "react";
import { Badge } from "flowbite-react";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <div></div>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <p>Welcome {username}</p>
          <MyButton textColor=" text-blue-600" onClick={handleLogout}>
            Logout
          </MyButton>

          <Badge color="info" size="sm">
            {totalCart}
          </Badge>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

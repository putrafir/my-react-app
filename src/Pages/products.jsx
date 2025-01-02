import { Button } from "flowbite-react";
import CardProduct from "../components/Fragments/CardProduct";
import { Fragment } from "react";
import MyButton from "../components/Elements/Button";
import { useState } from "react";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    image: "../../public/image/shoes-1.jpg",
    name: "Sepatu Baru",
    price: 1000000,
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    id: 2,
    image: "../../public/image/shoes-1.jpg",
    name: "Sepatu Lama",
    price: 2000000,
    description: "Here are the biggest enterprise technology .",
  },
  {
    id: 3,
    image: "../../public/image/shoes-1.jpg",
    name: "Sepatu Keren",
    price: 6000000,
    description: "Here are the biggest enterprise technology is something .",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      name: "Sepatu Baru",
      quantity: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: id, quantity: 1 }]);
    }
  };

  return (
    <Fragment>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div></div>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              class="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              {email}
            </a>

            <MyButton textColor=" text-blue-600" onClick={handleLogout}>
              Logout
            </MyButton>
          </div>
        </div>
      </nav>

      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap gap-2">
          {" "}
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className=" text-3xl font-bold text-blue-600  ml-5 mb-2">Cart</h1>
          <table className=" text-left table-auto border-separate border-spacing-x-5 ">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                if (!product) {
                  console.error(`Product with ID ${item.id} not found.`);
                  return null;
                }
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {"Rp "}
                      {product.price.toLocaleString()}
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      {"Rp "} {(product.price * item.quantity).toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center">
        <Counter />
      </div> */}
    </Fragment>
  );
};
export default ProductsPage;

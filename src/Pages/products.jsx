import { Button } from "flowbite-react";
import CardProduct from "../components/Fragments/CardProduct";
import { Fragment } from "react";
import MyButton from "../components/Elements/Button";

const products = [
  {
    id: 1,
    image: "../../public/image/shoes-1.jpg",
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    id: 2,
    image: "../../public/image/shoes-1.jpg",
    name: "Sepatu Lama",
    price: "Rp 2.000.000",
    description: "Here are the biggest enterprise technology .",
  },
  {
    id: 3,
    image: "../../public/image/shoes-1.jpg",
    name: "Sepatu Keren",
    price: "Rp 6.000.000",
    description: "Here are the biggest enterprise technology is something .",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
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
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};
export default ProductsPage;

import CardProduct from "../components/Fragments/CardProduct";
import { Fragment } from "react";
import MyButton from "../components/Elements/Button";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div></div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <p>Welcome {username}</p>
            <MyButton textColor=" text-blue-600" onClick={handleLogout}>
              Logout
            </MyButton>
          </div>
        </div>
      </nav>

      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap gap-2">
          {" "}
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className=" text-3xl font-bold text-blue-600  ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center">
        <Counter />
      </div> */}
    </Fragment>
  );
};
export default ProductsPage;

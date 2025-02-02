import CardProduct from "../components/Fragments/CardProduct";
import { Fragment } from "react";
import MyButton from "../components/Elements/Button";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState([0]);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.quantity;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");
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

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = () => {
    cartRef.current = [...cartRef.current, { id: 1, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  });

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
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>
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
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  if (!product) {
                    console.error(`Product with ID ${item.id} not found.`);
                    return null;
                  }
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 20)} ...</td>
                      <td>
                        {"$ "}
                        {product.price.toLocaleString()}
                      </td>
                      <td>{item.quantity}</td>
                      <td>
                        {"$ "}{" "}
                        {(product.price * item.quantity).toLocaleString()}
                      </td>
                    </tr>
                  );
                })}

              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {" "}
                    {"$ "}
                    {totalPrice.toLocaleString()}
                  </b>
                </td>
              </tr>
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

import { Link } from "react-router-dom";
import MyButton from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className=" w-72 gap-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700 flex flex-col justify-between ">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        className="rounded-t-lg h-60 w-full object-cover"
        src={image}
        alt="Product"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="p-5 h-full">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name.substring(0, 20)} ...
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {children.substring(0, 100)} ...
      </p>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex  items-center justify-between p-5">
      <span className=" text-sm font-bold">$ {price.toLocaleString()}</span>
      <MyButton variant="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </MyButton>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

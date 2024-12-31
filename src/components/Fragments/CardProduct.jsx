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
  const { image } = props;
  return (
    <a href="#">
      <img className="rounded-t-lg" src={image} alt="Product" />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="p-5 h-full">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {children}
      </p>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex  items-center justify-between p-5">
      <span className=" text-sm font-bold">Rp {price.toLocaleString()}</span>
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

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="max-w-sm mx-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between ">
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
  const { price } = props;
  return (
    <div className="flex  items-center justify-between p-5">
      <span className=" text-xl font-bold">{price}</span>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add To Cart
      </button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

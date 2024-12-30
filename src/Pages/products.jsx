import { Button } from "flowbite-react";
import CardProduct from "../components/Fragments/CardProduct";

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

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};
export default ProductsPage;

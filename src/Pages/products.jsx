import { Button } from "flowbite-react";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="../../public/image/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu" price="Rp 1.000.000">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </CardProduct.Body>
      </CardProduct>

      <CardProduct>
        <CardProduct.Header image="../../public/image/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu" price="Rp 1.000.000">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </CardProduct.Body>
      </CardProduct>
    </div>
  );
};
export default ProductsPage;

import { useEffect } from "react";
import { use } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import { useState } from "react";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  console.log(product);

  return (
    <div>
      <h1>Detail : {id} </h1>
    </div>
  );
};

export default DetailProductPage;

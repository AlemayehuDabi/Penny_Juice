import { useParams } from "react-router-dom";
import DetailComp from "../components/DetailComp";
import { Juice } from "../db";

export default function DetailPage() {
  const { id } = useParams();
  const productId = Number(id);

  const product = Juice.find((item) => item.id === productId);

  console.log(product);

  if (!product) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Product not found.
      </div>
    );
  }

  return <DetailComp Product={product} />;
}

import Single from "../../components/single/Single";
import { singleProduct } from "../../utils/data";
import "./SingleProductPage.scss";

const SingleProductPage = () => {
  return (
    <div className="single-product-page">
      <Single {...singleProduct} />
    </div>
  );
};

export default SingleProductPage;

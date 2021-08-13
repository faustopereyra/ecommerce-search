import { Wrapper } from "./styled";
import ProductImage from "./components/ProductImage";
import ProductDescription from "./components/ProductDescription";
import ProductSideBar from "./components/ProductSideBar";
import { useSelector } from "../../hooks/useSelector";

const ProductDetail: React.FC = () => {
  const productData = useSelector((state) => state.ProductReducer.data);
  return (
    productData && (
      <Wrapper>
        <ProductImage src={productData.picture} />
        <ProductSideBar data={productData} />
        <ProductDescription
          text={productData.description ? productData.description : ""}
        />
      </Wrapper>
    )
  );
};

export default ProductDetail;

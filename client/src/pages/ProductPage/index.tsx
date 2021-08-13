import { Wrapper } from "./styled";
import UseProductDetail from "../../hooks/useProductDetail";
import Categories from "../../components/Categories";
import ProductDetail from "../../components/ProductDetail";

const ProductPage: React.FC = () => {
  UseProductDetail();
  return (
    <Wrapper>
      <Categories />
      <ProductDetail />
    </Wrapper>
  );
};

export default ProductPage;

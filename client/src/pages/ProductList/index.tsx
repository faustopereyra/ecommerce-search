import Categories from "../../components/Categories";
import ProductDisplay from "../../components/ProductDisplay";
import { Wrapper, ErrorMessage } from "./styled";
import UseSearch from "../../hooks/useSearch";

const ProductList: React.FC = () => {
  const { data, error } = UseSearch();
  const { items } = data;
  return !error ? (
    <Wrapper>
      <Categories />
      {items.map((product) => (
        <ProductDisplay product={product} key={product.id} />
      ))}
    </Wrapper>
  ) : (
    <ErrorMessage>No se encontraron productos</ErrorMessage>
  );
};

export default ProductList;

import { useMemo } from "react";
import { ProductDataType } from "../../types/productTypes";
import {
  Wrapper,
  Thumbnail,
  Details,
  Price,
  Title,
  Condition,
  State,
} from "./styled";
import { useHistory } from "react-router";
import addPoint from "../../functions/addPoint";
import translateCondition from "../../functions/translateCondition";
interface ProductDisplayProps {
  product: ProductDataType;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  const history = useHistory();

  const displayPrice = useMemo(
    () => addPoint(product.price.amount.toString()),
    [product.price.amount]
  );

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    history.push("/search/" + product.id);
  };

  return (
    <Wrapper onClick={handleClick} data-testid="product-search-result">
      <Thumbnail src={product.picture} />
      <Details>
        <Price>$ {displayPrice}</Price>
        <Title>{product.title} </Title>
        <Condition>{translateCondition(product.condition)}</Condition>
      </Details>
      <State>{product.state && product.state}</State>
    </Wrapper>
  );
};

export default ProductDisplay;

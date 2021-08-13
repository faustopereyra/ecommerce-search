import { ProductDataType } from "../../../../types/productTypes";
import addPoint from "../../../../functions/addPoint";
import translateCondition from "../../../../functions/translateCondition";
import { Title, Price, Sold, Button, Wrapper, Decimals } from "./styled";
interface ProductSideBarProp {
  data: ProductDataType;
}

const ProductSideBar: React.FC<ProductSideBarProp> = ({ data }) => {
  const displayPrice = addPoint(data.price.amount.toString());
  const decimals = data.price.decimals === 0 ? "00" : data.price.decimals;
  return (
    <Wrapper>
      <Sold>
        {translateCondition(data.condition)} - {data.sold_quantity} vendidos
      </Sold>
      <Title>{data.title}</Title>
      <Price>
        $ {displayPrice}
        <Decimals>{decimals}</Decimals>
      </Price>
      <Button>Comprar</Button>
    </Wrapper>
  );
};

export default ProductSideBar;

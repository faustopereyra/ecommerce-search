import { Title, Text, Wrapper } from "./styled";

interface ProductDescription {
  text: string;
}

const ProductDescription: React.FC<ProductDescription> = ({ text }) => {
  return (
    <Wrapper>
      <Title>Descripción del Producto</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default ProductDescription;

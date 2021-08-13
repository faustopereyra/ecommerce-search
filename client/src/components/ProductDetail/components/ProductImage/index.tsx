import {Image} from "./styled"

interface ProductImageProps {
    src:string
}
const ProductImage:React.FC<ProductImageProps> = ({src}) => {
    return <Image src={src} />
};

export default ProductImage;

import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "./useSelector";
import { useActions } from "./useActions";

const UseProductDetail = () => {
  const params: { id: string } = useParams();
  const { getProductData } = useActions();
  useEffect(() => {
    getProductData(params.id);
  }, []);

  return useSelector((state) => state.ProductReducer.data);
};

export default UseProductDetail;

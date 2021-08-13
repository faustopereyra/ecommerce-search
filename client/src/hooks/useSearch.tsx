import { useEffect } from "react";
import { useLocation } from "react-router";
import { useSelector } from "./useSelector";
import { useActions } from "./useActions";

const UseSearch = () => {
  const location = useLocation();
  const { getSearchData } = useActions();
  useEffect(() => {
    getSearchData(location.search);
  }, []);

  return useSelector((state) => state.SearchReducer);
};

export default UseSearch;

import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { fetchSeach, fetchProducts } from "../../services";
import { SearchData, ProductData } from "../../types/productTypes";

export const getProductData = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.ITEM_FETCH_START });
    try {
      const result = await fetchProducts(id);
      const product = new ProductData(result);
      dispatch({
        type: ActionType.ITEM_FETCH_SUCCESS,
        payload: { itemResults: product.item },
      });
    } catch (error) {
      dispatch({
        type: ActionType.ITEM_FETCH_FAILURE,
      });
    }
  };
};

export const getSearchData = (query: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_FETCH_START });
    try {
      const results = await fetchSeach(query);
      const searchResult = new SearchData(results);
      dispatch({
        type: ActionType.SEARCH_FETCH_SUCCESS,
        payload: {
          searchResults: searchResult.items,
          categories: searchResult.categories,
        },
      });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_FETCH_FAILURE,
      });
    }
  };
};

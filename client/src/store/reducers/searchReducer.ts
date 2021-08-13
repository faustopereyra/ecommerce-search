import { ActionType } from "../action-types";
import { Action } from "../actions";
import { ProductDataType } from "../../types/productTypes";

interface SearchState {
  loading: boolean;
  error: true | null;
  data: {
    categories: string[] | null;
    items: ProductDataType[] | [];
  };
}

const initialState: SearchState = {
  loading: false,
  error: null,
  data: {
    categories: null,
    items: [],
  },
};

const reducer = (
  state: SearchState = initialState,
  action: Action
): SearchState => {
  switch (action.type) {
    case ActionType.SEARCH_FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.SEARCH_FETCH_SUCCESS:
      return {
        ...state,
        data: {
          categories: action.payload.categories,
          items: action.payload.searchResults,
        },
      };
    case ActionType.SEARCH_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;

import { ActionType } from "../action-types";
import { Action } from "../actions";
import { ProductDataType } from "../../types/productTypes";

interface ProductState {
  loading: boolean;
  error: true | null;
  data: ProductDataType | null;
}

const initialState: ProductState = {
  loading: false,
  error: null,
  data: null,
};

const reducer = (
  state: ProductState = initialState,
  action: Action
): ProductState => {
  switch (action.type) {
    case ActionType.ITEM_FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.ITEM_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.itemResults,
      };
    case ActionType.ITEM_FETCH_FAILURE:
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

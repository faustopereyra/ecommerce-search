import { ActionType } from "../action-types";
import { ProductDataType } from "../../types/productTypes";

interface SearchFetchStart {
  type: ActionType.SEARCH_FETCH_START;
}

interface SearchFetchFail {
  type: ActionType.SEARCH_FETCH_FAILURE;
}

interface SearchFetchSuccess {
  type: ActionType.SEARCH_FETCH_SUCCESS;
  payload: {
    searchResults: ProductDataType[];
    categories: string[] | null;
  };
}

interface ItemFetchStart {
  type: ActionType.ITEM_FETCH_START;
}

interface ItemFetchFail {
  type: ActionType.ITEM_FETCH_FAILURE;
}

interface ItemFetchSuccess {
  type: ActionType.ITEM_FETCH_SUCCESS;
  payload: {
    itemResults: ProductDataType;
  };
}

export type Action =
  | SearchFetchSuccess
  | SearchFetchStart
  | SearchFetchFail
  | ItemFetchSuccess
  | ItemFetchStart
  | ItemFetchFail;

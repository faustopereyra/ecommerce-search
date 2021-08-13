import { combineReducers } from "redux";
import ProductReducer from "./productReducer";
import SearchReducer from "./searchReducer";

const reducers = combineReducers({
  ProductReducer,
  SearchReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

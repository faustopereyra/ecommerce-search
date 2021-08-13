import { Provider } from "react-redux";
import { store } from "./store";

const Root: React.FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default Root;

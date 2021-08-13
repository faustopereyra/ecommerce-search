import Navigation from "./pages/Navigation";
import { Route } from "react-router";
import ErrorBoundary from "./components/ErrorBoundary";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <ErrorBoundary>
      <Route path="/" component={Navigation} />
      <Route exact path="/search" component={ProductList} />
      <Route exact path="/search/:id" component={ProductPage} />
    </ErrorBoundary>
  );
}

export default App;

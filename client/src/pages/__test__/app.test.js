import { render, screen, fireEvent } from "../../test-utils";
import App from "../../App";

describe("Search behavior", () => {
  it("should render list on products on search", async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Nunca dejes de buscar/i);
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "Iphone" } });
    fireEvent.click(buttonElement);
    const products = await screen.findAllByTestId("product-search-result");

    products.forEach((product) => expect(product).toBeInTheDocument());
  });

  it("should not render more than 4 search results", async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Nunca dejes de buscar/i);
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "Iphone" } });
    fireEvent.click(buttonElement);
    const products = await screen.findAllByTestId("product-search-result");

    expect(products.length).toBeLessThanOrEqual(4);
  });

  it("should display product details on click of Product", async () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Nunca dejes de buscar/i);
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "Iphone" } });
    fireEvent.click(buttonElement);
    const products = await screen.findAllByTestId("product-search-result");
    fireEvent.click(products[0]);
    const description = await screen.findByText(/Descripción del Producto/i);
    expect(description).toBeInTheDocument();
  });
});

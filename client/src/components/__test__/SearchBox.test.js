import { render, screen, fireEvent } from "../../test-utils";
import SearchBox from "../SearchBox";

describe("SearchBar Component", () => {
  it("should render an input with 'Nunca dejes de buscar' paceholder", () => {
    render(<SearchBox />);
    const inputElement = screen.getByPlaceholderText(/Nunca dejes de buscar/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    render(<SearchBox />);
    const inputElement = screen.getByPlaceholderText(/Nunca dejes de buscar/i);
    fireEvent.change(inputElement, { target: { value: "Iphone" } });
    expect(inputElement.value).toBe("Iphone");
  });

  it("should have search input when search button is clicked", () => {
    render(<SearchBox />);
    const inputElement = screen.getByPlaceholderText(/Nunca dejes de buscar/i);
    fireEvent.change(inputElement, { target: { value: "Iphone" } });
    expect(inputElement.value).toBe("Iphone");

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("Iphone");
  });
});

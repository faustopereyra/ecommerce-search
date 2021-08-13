import { render, screen } from "../../test-utils";
import Navigation from "../Navigation";

describe("Navigation Component", () => {
  it("should render a nav element", () => {
    render(<Navigation />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
});

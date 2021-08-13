import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Root from "./root";

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <Root>
      <MemoryRouter>{children}</MemoryRouter>
    </Root>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

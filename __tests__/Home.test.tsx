import "@testing-library/jest-dom";
import Home from "../src/pages/index";
import { renderWithWrapper } from "../jest/setupTests";
import { screen } from "@testing-library/react";

describe("Home", () => {
  it("renders <Home /> component", () => {
    renderWithWrapper(<Home />);
  });

  it("renders header", () => {
    const header = screen.getByRole("header");

    expect(header).toBeInTheDocument();
  });

  it("renders hero", () => {
    const hero = screen.getByRole("hero");

    expect(hero).toBeInTheDocument();
  });
});

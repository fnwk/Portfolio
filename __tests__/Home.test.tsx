import "@testing-library/jest-dom";
import Home from "../src/pages/index";
import { renderWithWrapper } from "../jest/setupTests";
<<<<<<< HEAD
=======
import { screen } from "@testing-library/react";
>>>>>>> main

describe("Home", () => {
  it("renders <Home /> component", () => {
    renderWithWrapper(<Home />);
  });
<<<<<<< HEAD
=======

  it("renders header", () => {
    const header = screen.getByRole("header");

    expect(header).toBeInTheDocument();
  });

  it("renders hero", () => {
    const hero = screen.getByRole("hero");

    expect(hero).toBeInTheDocument();
  });
>>>>>>> main
});

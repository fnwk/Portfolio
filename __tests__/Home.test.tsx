import "@testing-library/jest-dom";
import Home from "../src/pages/index";
import { renderWithWrapper } from "../jest/setupTests";

describe("Home", () => {
  it("renders <Home /> component", () => {
    renderWithWrapper(<Home />);
  });
});

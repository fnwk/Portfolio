import "@testing-library/jest-dom";
import Hero from "@/components/Hero/Index";
import { renderWithWrapper } from "../jest/setupTests";

describe("Hero", () => {
  it("renders <Hero /> component", () => {
    renderWithWrapper(<Hero />);
  });

  it("renders text properly", () => {
    const { getByText } = renderWithWrapper(<Hero />);

    const heading = getByText(/test/i);
    const description = getByText(/creating/i);

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("renders three js canvas", () => {
    const { getByTestId } = renderWithWrapper(<Hero />);

    expect(getByTestId("three-canvas")).toBeInTheDocument();
  });
});

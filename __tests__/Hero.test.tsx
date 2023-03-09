import "@testing-library/jest-dom";
import Hero from "@/components/Hero/Index";
import { renderWithWrapper } from "../jest/setupTests";

describe("Hero", () => {
  it("renders <Hero /> component", () => {
    renderWithWrapper(<Hero />);
  });

<<<<<<< HEAD
  it("Hero -> renders text properly", () => {
    const { getByText } = renderWithWrapper(<Hero />);

    const heading = getByText(/test/i);
    const description = getByText(/creating/i);

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("Hero -> renders three js canvas", () => {
    const { getByTestId } = renderWithWrapper(<Hero />);

=======
  it("renders text properly", () => {
    const { getByText } = renderWithWrapper(<Hero />);

    expect(getByText(/^website developer/i)).toBeInTheDocument();
    expect(getByText(/designer/i)).toBeInTheDocument();
  });

  it("renders three js canvas", () => {
    const { getByTestId } = renderWithWrapper(<Hero />);
>>>>>>> main
    expect(getByTestId("three-canvas")).toBeInTheDocument();
  });
});

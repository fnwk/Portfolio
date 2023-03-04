import "@testing-library/jest-dom";
import "jest-styled-components";

import { renderWithWrapper } from "../jest/setupTests";
import { fireEvent } from "@testing-library/react";

import Header from "@/components/Header/Index";

describe("Header", () => {
  it("renders <Header /> component", () => {
    renderWithWrapper(<Header />);
  });

  it("Header -> change height after scroll", () => {
    fireEvent.scroll(window, { target: { scrollY } });

    const header = renderWithWrapper(<Header />).getByTestId("header");
    const padding = window.scrollY > 0 ? "0vh" : "4vh";

    expect(header).toHaveStyleRule("padding-block", padding);
  });

  it("Header -> change background on scroll", () => {
    fireEvent.scroll(window, { target: { scrollY } });

    const header = renderWithWrapper(<Header />).getByTestId("header");
    const color = window.scrollY > 0 ? "rgba(0, 8, 33, 0.1)" : "transparent";
    const backdropFilter = window.scrollY > 0 ? 8 : 0;

    expect(header).toHaveStyleRule("background", color);
    expect(header).toHaveStyleRule(
      "backdrop-filter",
      `blur(${backdropFilter}px)`
    );
  });
});

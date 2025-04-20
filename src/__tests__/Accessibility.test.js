import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

expect.extend(toHaveNoViolations);

describe("Accessibility checks", () => {
  it("has no accessibility violations on main routes", async () => {
    const { container } = render(<MemoryRouter initialEntries={["/"]}><App /></MemoryRouter>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

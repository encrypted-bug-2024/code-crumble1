import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App routing and rendering", () => {
  it("renders Home page by default", () => {
    render(<MemoryRouter initialEntries={["/"]}><App /></MemoryRouter>);
    expect(screen.getByText(/Build\. Launch\. Scale\./i)).toBeInTheDocument();
  });

  it("renders NotFound page for unknown route", () => {
    render(<MemoryRouter initialEntries={["/some/unknown"]}><App /></MemoryRouter>);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});

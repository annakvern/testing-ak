import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App";

describe("App", () => {
  it("should renders headline", () => {
    render(<App />);
    const headline = screen.getByText("Testing testing");
    expect(headline).toBeInTheDocument();
  });
});

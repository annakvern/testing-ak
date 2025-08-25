import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Form from "./Form";

describe("Form", () => {
  it("is possible to write input in form", () => {
    render(<Form />);
    const nameInput = screen.getByLabelText("Namn:");
    const emailInput = screen.getByLabelText("Email:");

    fireEvent.change(nameInput, { target: { value: "Anna" } });
    fireEvent.change(emailInput, { target: { value: "anna@askd.se" } });

    expect(nameInput).toHaveValue("Anna");
    expect(emailInput).toHaveValue("anna@askd.se");
  });

  it("shows error if name does not start with capital letter", () => {
    render(<Form />);

    const nameInput = screen.getByLabelText("Namn:");
    const emailInput = screen.getByLabelText("Email:");

    fireEvent.change(nameInput, { target: { value: "anna" } });
    fireEvent.change(emailInput, { target: { value: "anna@askd.se" } });

    fireEvent.click(screen.getByRole("button", { name: "Spara" }));

    expect(screen.getByText(/måste börja med en versal/i)).toBeInTheDocument();
  });

  it("shows error if email is not structured right", () => {
    render(<Form />);

    const nameInput = screen.getByLabelText("Namn:");
    const emailInput = screen.getByLabelText("Email:");

    fireEvent.change(nameInput, { target: { value: "Anna" } });
    fireEvent.change(emailInput, { target: { value: "anna@askd" } });

    fireEvent.click(screen.getByRole("button", { name: "Spara" }));

    expect(screen.getByText(/ogiltig e-postadress/i)).toBeInTheDocument();
  });
});

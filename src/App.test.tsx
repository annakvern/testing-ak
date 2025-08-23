import { render, screen, within, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App";

describe("App", () => {
  it("should render headline", () => {
    render(<App />);
    const headline = screen.getByText("Boka aktivitet");
    expect(headline).toBeInTheDocument();
  });

  it("should open a booking form from a card", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: "Nattfotografering" });

    const card = heading.closest("div")!;

    const bokaBtn = within(card).getByRole("button", { name: "Boka" });
    fireEvent.click(bokaBtn);

    expect(screen.getByText("Boka Nattfotografering")).toBeInTheDocument();

    expect(screen.getByLabelText("Namn:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
  });

  it("fills and submits the form successfully", () => {
    render(<App />);

    const cardHeading = screen.getByRole("heading", {
      name: "Nattfotografering",
    });
    const card = cardHeading.closest("div")!;
    const bokaBtn = within(card).getByRole("button", { name: "Boka" });
    fireEvent.click(bokaBtn);

    const nameInput = screen.getByLabelText("Namn:");
    const emailInput = screen.getByLabelText("Email:");

    fireEvent.change(nameInput, { target: { value: "Anna" } });
    fireEvent.change(emailInput, { target: { value: "anna@example.com" } });

    fireEvent.click(screen.getByRole("button", { name: "Spara" }));

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});

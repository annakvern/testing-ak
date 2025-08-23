import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "./Card";

const cardData = {
  img: "https://images.pexels.com/photos/93820/pexels-photo-93820.jpeg",
  cardTitle: "Nattfotografering",
  cardContent: "Lär dig ta bilder i mörker.",
};

describe("Card", () => {
  it("renders texts dynamically", () => {
    render(<Card {...cardData} />);
    expect(screen.getByText("Nattfotografering")).toBeInTheDocument();
    expect(screen.getByText("Lär dig ta bilder i mörker.")).toBeInTheDocument();
  });

  it("boka button should have a teal background", () => {
    render(<Card {...cardData} />);
    expect(screen.getByRole("button")).toHaveStyle(
      "background-color: rgb(0,128,128)"
    );
  });

  it('opens the booking modal when clicking "Boka"', () => {
    render(<Card {...cardData} />);

    expect(
      screen.queryByText("Boka Nattfotografering")
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Boka" }));

    expect(screen.getByText("Boka Nattfotografering")).toBeInTheDocument();
  });

  it("closes the modal when clicking ✖", () => {
    render(<Card {...cardData} />);

    fireEvent.click(screen.getByRole("button", { name: "Boka" }));
    expect(screen.getByText("Boka Nattfotografering")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "✖" }));

    expect(
      screen.queryByText("Boka Nattfotografering")
    ).not.toBeInTheDocument();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Card from "./Card";

const cardData = {
  img: "https://images.pexels.com/photos/93820/pexels-photo-93820.jpeg",
  cardTitle: "Nattfotografering",
  cardContent: "Lär dig ta bilder i mörker.",
};

describe("Card", () => {
  it("should render dynamically", () => {
    render(
      <Card
        img={cardData.img}
        cardTitle={cardData.cardTitle}
        cardContent={cardData.cardContent}
      />
    );
    expect(screen.getByText("Nattfotografering")).toBeInTheDocument();
    expect(screen.getByText("Lär dig ta bilder i mörker.")).toBeInTheDocument();
  });

  it("should send alert when button is clicked", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(
      <Card
        img={cardData.img}
        cardTitle={cardData.cardTitle}
        cardContent={cardData.cardContent}
      />
    );
    const button = screen.getByRole("button", { name: "Boka" });
    fireEvent.click(button);

    expect(alertMock).toHaveBeenCalledWith(
      "Du har nu bokat Nattfotografering!"
    );
    alertMock.mockRestore();
  });
});

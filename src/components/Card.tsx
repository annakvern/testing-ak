interface CardProps {
  img: string;
  cardTitle: string;
  cardContent: string;
}

export default function Card({ img, cardTitle, cardContent }: CardProps) {
  const handleOnClick = () => {
    alert(`Du har nu bokat ${cardTitle}!`);
  };
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: 8,
        overflow: "hidden",
        width: 320,
      }}
    >
      <img
        src={img}
        alt={cardTitle}
        style={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          display: "block",
        }}
      />
      <div style={{ padding: 12 }}>
        <h2 style={{ margin: 0, fontWeight: 600, fontFamily: "sans-serif" }}>
          {cardTitle}
        </h2>
        <p style={{ marginTop: 8 }}>{cardContent}</p>
        <button
          style={{
            backgroundColor: "teal",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: 4,
            cursor: "pointer",
          }}
          onClick={handleOnClick}
        >
          Boka
        </button>
      </div>
    </div>
  );
}

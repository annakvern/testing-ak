import CounterButton from "./components/CounterButton";
import Card from "./components/Card";

interface CardData {
  img: string;
  cardTitle: string;
  cardContent: string;
}

const cards: CardData[] = [
  {
    img: "https://images.pexels.com/photos/93820/pexels-photo-93820.jpeg",
    cardTitle: "First Card",
    cardContent: "This is the first card content.",
  },
  {
    img: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",
    cardTitle: "Second Card",
    cardContent: "Here goes another description.",
  },
  {
    img: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    cardTitle: "Third Card",
    cardContent: "More details here.",
  },
];

function App() {
  return (
    <div>
      <h1
        style={{
          fontFamily: "sans-serif",
          margin: "auto",
          textAlign: "center",
        }}
      >
        Testing testing
      </h1>

      <CounterButton />
      <div
        style={{
          width: 900,
          margin: "auto",
          display: "flex",
          gap: 50,
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            cardTitle={card.cardTitle}
            cardContent={card.cardContent}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

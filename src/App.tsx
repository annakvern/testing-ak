import CounterButton from "./components/CounterButton";
import Card from "./components/Card";
import Form from "./components/Form";

interface CardData {
  img: string;
  cardTitle: string;
  cardContent: string;
}

const cards: CardData[] = [
  {
    img: "https://images.pexels.com/photos/93820/pexels-photo-93820.jpeg",
    cardTitle: "Nattfotografering",
    cardContent: "Lär dig ta bilder i mörker.",
  },
  {
    img: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",
    cardTitle: "Skogsnattvandring",
    cardContent: "Vi vandrar i skogen om natten",
  },
  {
    img: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
    cardTitle: "Nattdopp",
    cardContent: "Följ med på nattdopp i tjärnen",
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
          marginTop: 20,
        }}
      >
        Testing testing
      </h1>

      <CounterButton />
      <div
        style={{
          width: 900,
          margin: "auto",
          marginTop: 50,
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

import { useEffect, useState } from "react";
import "./App.css";
import CardGrid from "./Components/CardGrid";
import Card from "./Components/Card";
import ScoreBoard from "./Components/Scoreboard";

function App() {
  const [pickedCards, setPickedCards] = useState([]);

  const [scores, setScores] = useState({
    score: 0,
    best: 0,
  });

  const [cardData, setCardData] = useState([
    {
      src: "/fourArms.jpg",
      name: "Four Arms",
      id: 1,
    },
    {
      src: "/greyMatter.jpg",
      name: "Grey Matter",
      id: 2,
    },
    {
      src: "/heatBlast.jpg",
      name: "Heat Blast",
      id: 3,
    },
    {
      src: "/XLR8.jpg",
      name: "XLR8",
      id: 4,
    },
    {
      src: "/stinkFly.jpg",
      name: "Stink Fly",
      id: 5,
    },
    {
      src: "/wildMutt.jpg",
      name: "Wildmutt",
      id: 6,
    },
  ]);

  function handleClick(e) {
    let id;
    if (e.target.classList.contains("Card")) {
      id = e.target.id;
    } else {
      id = e.target.parentElement.id;
    }

    if (!pickedCards.includes(id)) {
      setPickedCards([...pickedCards, id]);
      setScores({
        ...scores,
        score: scores.score + 1,
      });
    } else {
      setPickedCards([]);
      setScores({
        best: scores.score > scores.best ? scores.score : scores.best,
        score: 0,
      });
    }
  }

  function cardRandomizer() {
    const index = cardData[Math.floor(Math.random() * (cardData.length + 1))];
    const randomCard = cardData[index];
    setCardData(
      cardData.filter((card) => {
        return card !== randomCard;
      })
    );

    return randomCard;
  }

  return (
    <div className="App">
      <ScoreBoard scores={scores} />
      <div className="grid">
        <Card data={cardData[0]} onClick={handleClick} />
        <Card data={cardData[1]} onClick={handleClick} />
        <Card data={cardData[2]} onClick={handleClick} />
        <Card data={cardData[3]} onClick={handleClick} />
        <Card data={cardData[4]} onClick={handleClick} />
        <Card data={cardData[5]} onClick={handleClick} />
      </div>
    </div>
  );
}
//<CardGrid onClick={handleClick} data={cardData} />

export default App;

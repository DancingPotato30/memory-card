//THIS IS ONLY HERE INCASE I NEED TO USE A CONTAINER INSTEAD OF INDIVUAL CARDS. IGNORE THIS.

import { useState } from "react";
import Card from "./Card";

export default function CardGrid(props) {
  const [cardData, setCardData] = useState(props.data);

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
    <div className="grid">
      <Card data={props.data[0]} onClick={props.onClick} />
      <Card data={props.data[1]} onClick={props.onClick} />
      <Card data={props.data[2]} onClick={props.onClick} />
      <Card data={props.data[3]} onClick={props.onClick} />
      <Card data={props.data[4]} onClick={props.onClick} />
      <Card data={props.data[5]} onClick={props.onClick} />
    </div>
  );
}

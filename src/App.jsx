import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import { flashcards } from "./data/flashcard";

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    console.log("flip");
    setIsFlipped(!isFlipped);
  };

  const updateCard = () => {
    if (currentCard === flashcards.length - 1) {
      setCurrentCard(0);
    } else {
      setCurrentCard(Math.floor(Math.random() * flashcards.length));
      setIsFlipped(false);
    }
  };

  return (
    <div>
      <div>
        <h2> The Ultimate Data Structures & Algorithm Quiz! </h2>
        <h4> How much of DS & A do you actually know?</h4>
        <h5> Number of Cards: {flashcards.length}</h5>
        <Card
          question={flashcards[currentCard].question}
          answer={flashcards[currentCard].answer}
          isFlipped={isFlipped}
          onClick={flipCard}
        />
        <button onClick={updateCard}> ⭢ </button>
      </div>
    </div>
  );
}

export default App;

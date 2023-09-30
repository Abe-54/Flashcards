const Card = ({ question, answer, isFlipped, onClick }) => {
  return (
    <div className={"card " + (isFlipped ? "flipped" : "")} onClick={onClick}>
      <div className="front">
        {question}
        <br />
      </div>
      <div className="back">{answer}</div>
    </div>
  );
};

export default Card;

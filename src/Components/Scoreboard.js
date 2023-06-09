export default function ScoreBoard(props) {
  return (
    <div className="ScoreBoard">
      <div>Score: {props.scores.score}</div>
      <div>Best Score: {props.scores.best}</div>
    </div>
  );
}

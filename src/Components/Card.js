export default function Card(props) {
  return (
    <div className="Card" onClick={props.onClick} id={props.data.id}>
      <img alt={props.data.name} src={props.data.src}></img>
      <div className="name">{props.data.name}</div>
    </div>
  );
}
